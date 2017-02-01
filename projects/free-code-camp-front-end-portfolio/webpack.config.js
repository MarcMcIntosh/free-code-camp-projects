const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const name = require('./package.json').name;

const publicPathUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return `/${name}/`;
  }
  return '/';
};

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
    new CleanWebpackPlugin(['docs']),
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
  devtool: 'cheap-source-map',
  devServer: {
    inline: true,
    hot: true,
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: publicPathUrl(),
  },
  historyApiFallback: {
    index: publicPathUrl(),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
  plugins: pluginConf(),
  module: {
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass'),
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
    ],
  },
  /* This solved the issue loading sass files for material */
  sassLoader: {
    includePaths: [
      path.resolve('node_modules'),
    ],
  },
  postcss: () => [require('autoprefixer')],
};
