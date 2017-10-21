const {
  EnvironmentPlugin,
  DefinePlugin,
  BannerPlugin,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  optimize: { UglifyJsPlugin },
} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = ({ production = false, browser = false } = {}) => {
  const bannerOptions = { raw: true, banner: 'require("source-map-support").install();' };
  const compress = { warnings: false };

  /* Probally outbated */
  const compileTimeConstantForMinification = {
    __PRODUCTION__: JSON.stringify(production),
  };

  const defaultPlugins = [
    new EnvironmentPlugin('NODE_ENV'),
    new DefinePlugin(compileTimeConstantForMinification),
    new ExtractTextPlugin({
      filename: '[contenthash].css',
      allChunks: true,
      // disable: !production,
      disable: !browser,
      ignoreOrder: true,
    }),
  ];
  if (!production && !browser) {
    return defaultPlugins.concat([
      new BannerPlugin(bannerOptions),
    ]);
  }
  if (!production && browser) {
    return defaultPlugins.concat([
      new HotModuleReplacementPlugin(),
      new NoEmitOnErrorsPlugin(),
    ]);
  }
  if (production && !browser) {
    return defaultPlugins.concat([
      new BannerPlugin(bannerOptions),
      new UglifyJsPlugin({ compress }),
    ]);
  }
  if (production && browser) {
    return defaultPlugins.concat([
      new UglifyJsPlugin({ compress }),
      new ManifestPlugin({ fileName: 'manifest.json' }),
    ]);
  }
  return defaultPlugins;
};
