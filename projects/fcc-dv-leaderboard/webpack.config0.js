const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const buildDir = IS_PROD ? 'build' : 'dev';
const OUT_PATH = path.resolve(__dirname, buildDir);

// const sassLoader = { includePaths: [path.resolve('node_modules')] };

const extractSass = new ExtractTextPlugin('styles.css');

const CSS_LOADER_CONFIG = [{
  loader: 'css-loader',
  // options: { sourceMap: true },
}, {
  loader: 'postcss-loader',
  options: {
    plugins: function () {
      return [
        require('precss'),
        require('autoprefixer'),
      ];
    },
  },
}, {
  loader: 'sass-loader',
  options: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  // options: { sourceMap: true },
}];

const rules = [
  {
    test: /\.jsx?$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [{
      loader: 'eslint-loader',
      options: {
        extends: 'airbnb',
        env: { browser: true, node: true },
        rules: {
          'no-underscore-dangle': 'off',
          'react/forbid-prop-types': 'off',
        },
      },
    }],
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }],
          'react',
          ['es2015', { modules: false }],
        ],
        plugins: ['transform-object-rest-spread'],
      },
    }],
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
  }, {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  }, { test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  }, { test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png',
  },
  /*{
    test: /\.scss$/,
    use: [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG),
  },*/
  {
    test: /\.scss$/,
    use: extractSass.extract(CSS_LOADER_CONFIG),
  },
];

const pluginConf = () => {
  const {
    DedupePlugin,
    AggressiveMergingPlugin,
    UglifyJsPlugin,
  } = webpack.optimize;

  const DEFAULT_PLUGINS = [
    extractSass,
    new AggressiveMergingPlugin(),
    new CleanWebpackPlugin([buildDir]),
    // new ExtractTextPlugin('styles.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.ejs',
      files: {
        css: ['/styles.css'],
      },
    }),
    /* new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        output: { path: OUT_PATH },
        postcss: [autoprefixer],
        // sassLoader,
      },
    }),*/
  ];
  if (process.env.NODE_ENV === 'production') {
    return DEFAULT_PLUGINS.concat([
      new webpack.DefinePlugin({ 'process.env': {
        NODE_ENV: JSON.stringify('production'),
      } }),
      new UglifyJsPlugin({
        minimize: true,
        comments: false,
      }),
      new DedupePlugin(),
    ]);
  }
  /* Development Plugins */
  return DEFAULT_PLUGINS.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
};

module.exports = {
  entry: './app.jsx',
  target: 'web',
  devtool: IS_DEV ? 'cheap-source-map' : false,
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: {
      index: '/',
    },
  },
  output: {
    filename: '[hash].js',
    path: OUT_PATH,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
  // plugins: pluginConf(),
  module: {
    rules,
  },
};
