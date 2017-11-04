/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const localIdentName = require('./localIdentName');

const createLoaders = ({ production = false, browser = false }) => ([
  {
    loader: browser ? 'css-loader' : 'css-loader/locals',
    options: {
      sourceMap: true,
      modules: true,
      localIdentName: localIdentName({ production }),
      importLoaders: 1,
    },
  },
  /*{
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
  },*/
/* precss works prety well */
{
  loader: 'postcss-loader',
  options: {
    indent: 'postcss',
    sourceMap: true,
    config: {
      ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} },
    },
  },
},
  'resolve-url-loader',
]);

module.exports = ({
  production = false,
  browser = false,
} = {}) => {
  const loaders = createLoaders({ production, browser });
  const client = production ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders }) : [].concat({
    loader: 'style-loader',
    options: { hmr: production },
  }, loaders);
  // const client = ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders });
  // const server = ['style-loader', ...loaders];
  return { test: /\.css$/, use: browser ? client : loaders };
};
