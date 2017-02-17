const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const buildDir = IS_PROD ? 'build' : 'dev';
const OUT_PATH = path.resolve(__dirname, buildDir);

const CSS_LOADER_CONFIG = [{
  loader: 'css-loader',
  options: { sourceMap: IS_DEV },
}, {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefixer],
  },
}, {
  loader: 'sass-loader',
  options: {
    modules: true,
    includePaths: [
      path.resolve(__dirname, 'node_modules'),
    ],
    sourceMap: IS_DEV,
  },
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
          'env',
          'react',
          'es2015',
        ],
        plugins: [
          'transform-runtime',
          'transform-object-rest-spread',
        ],
      },
    }],
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: CSS_LOADER_CONFIG,
    }),
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
];

const pluginConf = () => {
  const {
    DedupePlugin,
    AggressiveMergingPlugin,
    UglifyJsPlugin,
  } = webpack.optimize;

  const DEFAULT_PLUGINS = [
    new AggressiveMergingPlugin(),
    new CleanWebpackPlugin([OUT_PATH]),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.ejs',
      files: {
        css: ['/styles.css'],
      },
    }),
    new ExtractTextPlugin('styles.css'),
  ];
  if (IS_PROD) {
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
  entry: [
    'babel-polyfill',
    './app.jsx',
  ],
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
  module: {
    rules,
  },
  plugins: pluginConf(),
};
