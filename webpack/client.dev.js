const { resolve } = require('path');
const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin, DefinePlugin, optimize: { CommonsChunkPlugin } } = require('webpack');

const WriteFilePlugin = require('write-file-webpack-plugin'); // see whar chunks are built
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const res = p => resolve(__dirname, p);

const app = res('../src/app/index.jsx');
const hmr = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false', 'react-hot-loader/patch'];

const entry = hmr.concat(app);
const output = {
  filename: '[name].js',
  chunkFilename: '[name].js',
  path: res('../build/client'),
  publicPath: '/',
};
// const devtool = 'source-map';
const devtool = 'eval';

const babelRules = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
  // options: { modules: false }, // removes un-needed deps with tree shaking
};

const cssOptions = { sourceMap: true, modules: true, localIdentName: '[name]__[local]--[hash:base64:5]', importLoaders: 1 };

const postCssOptions = { indent: 'postcss', sourceMap: true, config: { ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} } } };

const cssRules = { test: /\.css$/,
  use: ExtractCssChunks.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: cssOptions },
      { loader: 'postcss-loader', options: postCssOptions },
      'resolve-url-loader',
    ],
  }),
};

const scssRules = { // test: /\.s(a|c)ss$/,
  test: /\.scss$/,
  use: ExtractCssChunks.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: Object.assign({}, cssOptions, { importLoaders: 3 }) },
      { loader: 'postcss-loader', options: postCssOptions },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true, includePaths: [res('../node_modules')] } },
    ],
  }),
};

const imageRules = {
  test: /\.(gif|svg|woff(2)?|ttf|eot|png|jpg|jpeg)$/,
  loader: 'url-loader',
  options: { limit: 8192, name: '[name].[ext]', emitFile: true },
};

const jsonRule = { test: /\.json$/,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: { name: '[path][name].[ext]' },
};

const plugins = [
  new WriteFilePlugin(),
  new ExtractCssChunks(),
  new CommonsChunkPlugin({ names: ['bootstrap'], filename: '[name].js', minChunks: Infinity }),
  new HotModuleReplacementPlugin(),
  new NoEmitOnErrorsPlugin(),
  new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
];

module.exports = {
  name: 'client',
  target: 'web',
  devtool,
  entry,
  output,
  module: { rules: [imageRules, babelRules, cssRules, scssRules, jsonRule] },
  resolve: { extensions: ['.js', '.jsx', '.css', '.scss', '.sass'] },
  plugins,
};
