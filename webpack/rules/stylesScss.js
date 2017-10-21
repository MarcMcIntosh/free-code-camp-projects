/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('../paths');
const localIdentName = require('./localIdentName');

const createLoader = browser => ([
  {
    loader: browser ? 'css-loader' : 'css-loader/locals',
    options: {
      modules: true,
      sourceMap: true,
      importLoaders: 3,
      localIdentName,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      sourceMap: true,
      plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-cssnext')(),
        // require('autoprefixer')(),
        require('cssnano')(),
        require('postcss-reporter')({
          clearReportedMessages: true,
        }),
      ],
    },
  },
  'resolve-url-loader',
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [PATHS.modules],
    },
  },
]);

module.exports = ({
  production = false,
  browser = false,
} = {}) => {
  const loaders = createLoader(browser);
  const client = production ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders }) : [].concat({
    loader: 'style-loader',
    options: { hmr: production },
  }, loaders);
  // const client = ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders });
  // const server = ['style-loader', ...loaders];
  return { test: /\.scss$/, use: browser ? client : loaders };
  // return { test: /\.scss$/, use: browser ? client : loaders };
};
