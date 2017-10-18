const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoader = ({ production = false, browser = false }) => ({
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    disable: !production,
    fallback: 'style-loader',
    use: [{
      loader: browser ? 'css-loader' : 'css-loader/locals',
      query: {
        modules: true,
        sourceMap: true,
        importLoaders: 2,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    }, 'resolve-url-loader?debug', 'sass-loader?sourceMap'],
  }),
});

const cssLoader = ({ production = false, browser = false }) => ({
  test: /\.css$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    disable: !production,
    fallback: 'style-loader',
    use: [{
      loader: browser ? 'css-loader' : 'css-loader/locals',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    }, 'postcss-loader', 'resolve-url-loader?debug'],
  }),
});

module.exports = ({ production = false, browser = false } = {}) => {
  const css = cssLoader({ production, browser });
  const scss = sassLoader({ production, browser });
  return [css, scss];
};
