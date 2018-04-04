const fs = require('fs');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin,
  HashedModuleIdsPlugin,
  optimize: {
    LimitChunkCountPlugin,
    CommonsChunkPlugin,
    // UglifyJsPlugin,
  },
} = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const WriteFilePlugin = require('write-file-webpack-plugin'); // see whar chunks are built
const StatsPlugin = require('stats-webpack-plugin'); // eslint-disable-line


const modulesDir = path.resolve(__dirname, '..', 'node_modules');
const CLIENT_OUT = path.resolve(__dirname, '..', 'build', 'client');
const SERVER_OUT = path.resolve(__dirname, '..', 'build', 'server');
const CLIENT_APP = path.resolve(__dirname, '..', 'src', 'app', 'index.jsx');
const STATS_OUT = '../stats.json';

const CLIENT_HMR = [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
  'react-hot-loader/patch',
];

const postCssOptions = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    config: { ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} } },
    plugins: () => [require('autoprefixer')()], // eslint-disable-line
  },
};

const indentName = (production = false) => (production ? '[hash:base64]' : '[name]-[local]');

const name = ({ server = false } = {}) => (server ? 'server' : 'client');

const target = ({ server = false } = {}) => (server ? 'node' : 'web');

const devtool = ({ production = false } = {}) => (production ? 'source-map' : 'eval');

const clientEntry = ({ production = false } = {}) => {
  const main = production ? CLIENT_APP : CLIENT_HMR.concat(CLIENT_APP);
  const vendor = ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'classnames/bind'];
  return { main, vendor };
};

const serverEntry = f => path.resolve(__dirname, '..', 'src', 'server', f);

// const entry = ({ server = false, production = false, dist = false } = {}) => (server ? serverEntry(dist ? 'index.js' : 'render.jsx') : clientEntry({ production }));

const entry = ({ server = false, production = false } = {}) => (server ? serverEntry('index.js') : clientEntry({ production }));


const externalsProd = fs.readdirSync(modulesDir).filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x)).reduce((ext, mod) => Object.assign({}, ext, { [mod]: `commonjs ${mod}` }), {});

/* const externals = ({
  server = false,
  production = false,
} = {}) => {
  if (server && production) {
    return [
      // 'leveldown',
      // 'pouchdb-node',
      // 'sqlite3',
    ];
  } else if (server && !production) {
    return [externalsProd];
  }
  return [];
}; */

const externals = ({ server = false } = {}) => {
  if (server) { return [].concat(externalsProd); }
  return [];
};

const clientOut = ({ production }) => ({
  filename: production ? '[name].[chunkhash].js' : '[name].js',
  chunkFilename: production ? '[name].[chunkhash].js' : '[name].js',
  path: CLIENT_OUT,
  publicPath: '/',
});

const serverOut = ({ production = false }) => ({
  path: SERVER_OUT,
  filename: 'index.js',
  chunkFilename: production ? '[name].[chunkhash].js' : '[name].js',
  libraryTarget: 'commonjs2',
  publicPath: '/',
});

const output = ({ server = false, production = false } = {}) => (server ? serverOut({ production }) : clientOut({ production }));

const resolve = { extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'] };

const cssOptions = ({ server = false, production = false, importLoaders = 1 } = {}) => ({
  loader: server ? 'css-loader/locals' : 'css-loader',
  options: {
    sourceMap: true,
    modules: true,
    localIdentName: indentName(production),
    importLoaders,
    minimize: production,
  },
});

const cssRules = ({ server, production }) => {
  const loaders = [cssOptions({ server, production }), postCssOptions, 'resolve-url-loader'];
  return { test: /\.css$/, use: server ? loaders : ExtractCssChunks.extract({ use: loaders }) };
};

const scssRules = ({ server, production }) => {
  const loaders = [cssOptions({ server, production, importLoaders: 3 }), postCssOptions, 'resolve-url-loader', { loader: 'sass-loader', options: { sourceMap: true, includePaths: [modulesDir] } }];
  return { test: /\.s(a|c)ss$/, use: server ? loaders : ExtractCssChunks.extract({ use: loaders }) };
};

const imageRules = ({
  server = false,
  production = false,
}) => ({
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
  options: { name: production ? '[hash].[ext]' : '[path][name].[ext]', emitFile: !server },
});

const jsRule = { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ };

const rules = ({ server = false, production = false }) => {
  const css = cssRules({ server, production });
  const scss = scssRules({ server, production });
  const images = imageRules({ server, production });
  const json = jsonRule({ server, production });
  return [jsRule, css, scss, images, json];
};

const plugins = ({ server = false, production = false, dist = false } = {}) => {
  const min = new UglifyJsPlugin({
    uglifyOptions: {
      output: { comments: !dist },
    },
    sourceMap: !server,
  });

  const DEFAULT_PLUGINS = [new DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(production ? 'production' : 'development') },
  })];

  const DEFAULT_CLIENT_PLUGINS = [
    new ExtractCssChunks({ ignoreOrder: true }),
    new CommonsChunkPlugin({ names: ['bootstrap', 'vendor'], filename: production ? '[name].[chunkhash].js' : '[name].js', minChunks: Infinity }),
    new StatsPlugin(STATS_OUT),
  ];

  const CLIENT_DEV_PLUGINS = [new WriteFilePlugin(), new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()];

  const CLIENT_PROD_PLUGINS = [
    min,
    new WriteFilePlugin(),
    new HashedModuleIdsPlugin(),
  ];

  const CLIENT_PLUGINS = [].concat(DEFAULT_PLUGINS, DEFAULT_CLIENT_PLUGINS, production ? CLIENT_PROD_PLUGINS : CLIENT_DEV_PLUGINS);

  const SERVER_DEFAULTS = [
    new WriteFilePlugin(),
    new LimitChunkCountPlugin({ maxChunks: 1 }),
  ];

  // const SERVER_PLUGINS = dist ? [].concat(DEFAULT_PLUGINS, SERVER_DEFAULTS, min) : [].concat(DEFAULT_PLUGINS, SERVER_DEFAULTS);

  const SERVER_PLUGINS = [].concat(DEFAULT_PLUGINS, SERVER_DEFAULTS);

  return server ? SERVER_PLUGINS : CLIENT_PLUGINS;
};

const config = ({ server = false, production = false, dist = false } = {}) => ({
  name: name({ server }),
  target: target({ server }),
  stats: { children: false },
  devtool: devtool({ production }),
  node: server ? { __filename: true, __dirname: true } : undefined,
  entry: entry({ server, production, dist }),
  output: output({ server, production }),
  externals: externals({ server, production }),
  module: { rules: rules({ server, production }) },
  resolve,
  plugins: plugins({ server, production, dist }),
});

module.exports = config;
