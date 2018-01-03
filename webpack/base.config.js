const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin,
  HashedModuleIdsPlugin,
  optimize: { LimitChunkCountPlugin, CommonsChunkPlugin, UglifyJsPlugin },
} = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin'); // see whar chunks are built
const nodeExternals = require('webpack-node-externals');
const StatsPlugin = require('stats-webpack-plugin'); // eslint-disable-line


const modulesDir = path.resolve('..', 'node_modules');
const CLIENT_OUT = path.resolve('..', 'build', 'client');
const SERVER_OUT = path.resolve('..', 'build', 'server');
const CLIENT_APP = path.resolve('..', 'src', 'app', 'index.jsx');
const CLIENT_HMR = [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
  'react-hot-loader/patch',
];
const SERVER_ENTRY = path.resolve('..', 'src', 'server', 'render.jsx');
const STATS_OUT = 'stats.json';

export const name = ({ server = false } = {}) => (server ? 'server' : 'client');

export const target = ({ server = false } = {}) => (server ? 'node' : 'web');

export const devtool = ({ production = false } = {}) => (production ? 'source-map' : 'eval');

const clientEntry = ({ production = false } = {}) => (production ? CLIENT_APP : CLIENT_HMR.concat(CLIENT_APP));

export const entry = ({ server = false, production = false } = {}) => (server ? SERVER_ENTRY : clientEntry({ production }));

export const externals = ({ server = false, production = false } = {}) => (server && !production ? [].concat(nodeExternals({
  whitelist: [/\.bin\//, 'react-universal-component', 'webpack-flush-chunks', 'require-universal-module'],
})) : []);

const clientOut = ({ production }) => ({
  filename: production ? '[name].[chunkhash].js' : '[name].js',
  chunkFilename: production ? '[name].[chunkhash].js' : '[name].js',
  path: CLIENT_OUT,
  publicPath: '/',
});

const serverOut = () => ({
  path: SERVER_OUT,
  filename: '[name].js',
  libraryTarget: 'commonjs2',
});

export const output = ({ server = false, production = false } = {}) => (server ? serverOut() : clientOut({ production }));

const postCssOptions = { loader: 'postcss-loader', options: { indent: 'postcss', sourceMap: true, config: { ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} } } } };

const indentName = (production = false) => (production ? '[hash:base64]' : '[name]-[local]');

const cssOptions = ({ server = false, production = false, importLoaders = 1 } = {}) => ({
  loader: server ? 'css-loader/locals' : 'css-loader',
  options: {
    sourceMap: true,
    modules: true,
    localIdentName: indentName(production),
    importLoaders,
  },
});

const cssRules = ({ server, production }) => {
  const loaders = [cssOptions({ server, production }), postCssOptions, 'resolve-url-loader'];
  return { test: /\.css$/, use: server ? loaders : ExtractCssChunks.extract({ use: loaders }) };
};

const scssRules = ({ server, production }) => {
  const loaders = [
    cssOptions({ server, production, importLoaders: 3 }),
    postCssOptions,
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true, includePaths: [modulesDir] } },
  ];
  return { test: /\.s(a|c)ss$/, use: server ? loaders : ExtractCssChunks.extract({ use: loaders }) };
};

const imageRules = ({ server = false, production = false }) => ({
  test: /\.(gif|svg|woff(2)?|ttf|eot|png|jpg|jpeg)$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: production ? '[hash].[ext]' : '[name].[ext]',
    emitFile: !server,
  },
});

const jsonRule = ({ server = false, production = false }) => ({
  test: /\.json$/,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    name: production ? '[hash].[ext]' : '[path][name].[ext]',
    emitFile: !server,
  },
});

export const resolve = { extensions: ['.js', '.jsx', '.css', '.scss', '.sass'] };

export const rules = ({ server = false, production = false }) => {
  const css = cssRules({ server, production });
  const scss = scssRules({ server, production });
  const images = imageRules({ server, production });
  const json = jsonRule({ server, production });
  return [
    { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    css,
    scss,
    images,
    json,
  ];
};


export const plugins = ({ server = false, production = false } = {}) => {
  const DEFAULT_PLUGINS = [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(production ? 'production' : 'development') },
    }),
  ];
  const DEFAULT_CLIENT_PLUGINS = [
    new ExtractCssChunks({ ignoreOrder: true }),
    new CommonsChunkPlugin({
      names: ['bootstrap'],
      filename: production ? '[name].[chunkhash].js' : '[name].js',
      minChunks: Infinity,
    }),
  ];

  const CLIENT_DEV_PLUGINS = [
    new WriteFilePlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
  ];

  const CLIENT_PROD_PLUGINS = [
    new UglifyJsPlugin({
      compress: { screw_ie8: true, warnings: false },
      mangle: { screw_ie8: true },
      output: { screw_ie8: true, comments: false },
      sourceMap: true,
    }),
    new HashedModuleIdsPlugin(),
    new StatsPlugin(STATS_OUT),
  ];

  const CLIENT_PLUGINS = [].concat(DEFAULT_PLUGINS, DEFAULT_CLIENT_PLUGINS, production ? CLIENT_PROD_PLUGINS : CLIENT_DEV_PLUGINS);

  const SERVER_DEFAULTS = [
    new WriteFilePlugin(),
    new LimitChunkCountPlugin({ maxChunks: 1 }),
  ];

  const SERVER_PLUGINS = [].concat(DEFAULT_PLUGINS, SERVER_DEFAULTS);

  return server ? SERVER_PLUGINS : CLIENT_PLUGINS;
};

const config = ({ server = false, production = false }) => ({
  name: name({ server }),
  target: target({ server }),
  devtool: devtool({ production }),
  entry: entry({ server, production }),
  output: output({ server }),
  externals: externals({ server, production }),
  module: { rules: rules({ server, production }) },
  resolve,
  plugins: plugins({ server, production }),
});

export default config;
