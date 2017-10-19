const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('../paths');

const localIdentName = '[name]__[local]___[hash:base64:5]';

const sassLoader = ({
  // production = false,
  browser = false,
}) => ({
  test: /\.scss$/,
  // exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: browser ? 'style-loader' : '',
    use: [{
      loader: browser ? 'css-loader' : 'css-loader/locals',
      query: {
        modules: true,
        sourceMap: true,
        importLoaders: 3,
        localIdentName,
      },
    }, 'postcss-loader?sourceMap',
    'resolve-url-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [PATHS.modules],
      },
    }],
  }),
});

const cssLoader = ({
  // production = false,
  browser = false,
}) => ({
  test: /\.css$/,
  // exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: browser ? 'style-loader' : '',
    use: [{
      loader: browser ? 'css-loader' : 'css-loader/locals',
      query: {
        sourceMap: true,
        modules: true,
        localIdentName,
        importLoaders: 1,
      },
    }, 'postcss-loader?sourceMap',
    // 'resolve-url-loader?debug',
    ],
  }),
});

module.exports = ({ production = false, browser = false } = {}) => {
  const css = cssLoader({ production, browser });
  const scss = sassLoader({ production, browser });
  return [css, scss];
};
