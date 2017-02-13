const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const buildDir = IS_PROD ? 'build' : 'dev';
const OUT_PATH = path.resolve(__dirname, buildDir);

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
];

module.exports = {
  entry: './app.jsx',
  target: 'web',
  devtool: IS_DEV ? 'cheap-source-map' : false,
  devServer: {
    // inline: true,
    // hot: true,
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.ejs',
      files: {
        css: ['/styles.css'],
      },
    }),
  ],
};
