const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('../paths');
const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');


/*
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
*/

const createBrowserLoaders = extractCssToFile => (loaders) => {
  if (extractCssToFile) {
    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loaders,
    });
  }
  return [{ loader: 'style-loader' }, ...loaders];
};

const createLoaders = client => ([
  {
    loader: client ? 'css-loader' : 'css-loader/locals',
    options: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
      sourceMap: true,
      modules: true,
      importLoaders: 1,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      // ident: 'postcss',
      plugins: () => ([
        // postcssImport({ path: path.resolve(PATHS.app, './css') }),
        postcssImport(),
        // postcssCssnext({ browsers: ['> 1%', 'last 2 versions'] }),
        postcssCssnext(),
        postcssReporter({ clearMessages: true }),
      ]),
    },
  }, {
    loader: 'sass-loader',
    options: {
      modules: true,
      includePaths: [PATHS.modules],
    },
  },
]);


module.exports = ({
  production = false,
  browser = false,
} = {}) => {
  const serverLoaders = createLoaders(false);
  const browserLoaders = createBrowserLoaders(production)(createLoaders(true));
  return {
    test: /\.(sass|scss|css)$/,
    use: browser ? browserLoaders : serverLoaders,
  };
};
