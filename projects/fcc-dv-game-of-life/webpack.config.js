const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const buildDir = IS_PROD ? 'build' : 'dev';

const sassLoader = { includePaths: [path.resolve('node_modules')] };

const preLoaders = [
  { loader: 'eslint-loader', test: /\.jsx?$/, exclude: /node_modules/ },
];

const loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['env', { modules: false }, 'es2015', 'react'],
      plugins: [
        'transform-object-rest-spread',
      ],
    },
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
const rules = [{
  test: /\.scss$/,
  use: IS_DEV ? [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader', options: { sourceMap: true } },
  ] : ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
}];

const pluginConf = () => {
  const {
    OccurenceOrderPlugin,
    DedupePlugin,
    AggressiveMergingPlugin,
    UglifyJsPlugin,
  } = webpack.optimize;

  const DEFAULT_PLUGINS = [
    new OccurenceOrderPlugin(),
    new AggressiveMergingPlugin(),
    new CleanWebpackPlugin([buildDir]),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.ejs',
      files: {
        css: ['/styles.css'],
      },
    }),
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
    path: path.resolve(__dirname, buildDir),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
  plugins: pluginConf(),
  module: {
    rules,
    preLoaders,
    loaders,
  },
  sassLoader,
  postcss: () => [autoprefixer],
};
