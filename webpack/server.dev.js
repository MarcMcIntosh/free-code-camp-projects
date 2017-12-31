const { resolve } = require('path');
const { DefinePlugin, optimize: { LimitChunkCountPlugin } } = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WriteFilePlugin = require('write-file-webpack-plugin');

const res = p => resolve(__dirname, p);

const entry = res('../src/server/render.jsx');
const output = res('../build/server');

const externals = [].concat(nodeExternals({ whitelist: [/\.bin\//, 'react-universal-component', 'webpack-flush-chunks', 'require-universal-module'] }));

const babelRules = { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' };

const imageRules = {
  test: /\.(gif|svg|woff(2)?|ttf|eot|png|jpg|jpeg)$/,
  loader: 'url-loader',
  options: { limit: 8192, name: '[path]-[name].[ext]', emitFile: false },
};

const cssOptions = { sourceMap: true, modules: true, localIdentName: '[name]__[local]--[hash:base64:5]', importLoaders: 1 };
const postCssOptions = { indent: 'postcss', sourceMap: true, config: { ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} } } };

const cssRules = { test: /\.css$/,
  use: [
    { loader: 'css-loader/locals', options: cssOptions },
    { loader: 'postcss-loader', options: postCssOptions },
    'resolve-url-loader',
  ],
};

const scssRules = { test: /\.s(a|c)ss$/,
  use: [
    { loader: 'css-loader/locals', options: Object.assign({}, cssOptions, { importLoaders: 3 }) },
    { loader: 'postcss-loader', options: postCssOptions },
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true, includePaths: [res('../node_modules')] } },
  ],
};

const plugins = [
  new WriteFilePlugin(),
  new LimitChunkCountPlugin({ maxChunks: 1 }),
  new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
];

module.exports = {
  name: 'server',
  target: 'node',
  // devtool: 'source-map',
  devtool: 'eval',
  entry: [entry],
  externals,
  output: { path: output, filename: '[name].js', libraryTarget: 'commonjs2' },
  module: { rules: [imageRules, babelRules, cssRules, scssRules] },
  resolve: { extensions: ['.js', '.jsx', '.css', '.scss', '.sass'] },
  plugins,
};
