const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
  // const HtmlWebpackPlugin = require('html-webpack-plugin');
  // const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  target: 'web',
  devtool: 'cheap-source-map',
  devServer: {
    inline: true,
    hot: true,
  },
  output: {
    filename: 'index.js',
    path: './dist',
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
    new CleanWebpackPlugin(['dist']),
      // new ExtractTextPlugin('styles.css', { allChunks: true }),
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
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },
};
