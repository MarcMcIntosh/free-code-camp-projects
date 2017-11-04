/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('../paths');
const localIdentName = require('./localIdentName');

const createLoader = ({ production, browser }) => ([
  {
    loader: browser ? 'css-loader' : 'css-loader/locals',
    options: {
      modules: true,
      sourceMap: true,
      importLoaders: 3,
      localIdentName: localIdentName({ production }),
    },
  }, /* {
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
  }, */
  {
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      sourceMap: true, // production && browser,
      config: {
        ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} },
      },
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
  const loaders = createLoader({ production, browser });
  const client = production ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders }) : [].concat({
    loader: 'style-loader',
    options: { hmr: production },
  }, loaders);
  // const client = ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders });
  // const server = ['style-loader', ...loaders];
  return { test: /\.scss$/, use: browser ? client : loaders };
  // return { test: /\.scss$/, use: browser ? client : loaders };
};
