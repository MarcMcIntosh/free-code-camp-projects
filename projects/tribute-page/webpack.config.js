const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');


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
    path: './docs',
      //publicPath: '/git-hub-repo-name/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.HotModuleReplacementPlugin(),
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
  ],
  module: {
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      }, {
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
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
    postcss: () => [autoprefixer, precss],
  },
};
