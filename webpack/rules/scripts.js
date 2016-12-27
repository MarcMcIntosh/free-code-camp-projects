const PATHS = require('../paths');

const createPresets = (bool) => {
  const presets = ['react', 'env', 'stage-0'];
  return bool ? ['react-hmre'].concat(presets) : presets;
};

module.exports = ({ production = false, browser = false } = {}) => {
  const isHot = !production && browser;
  const presets = createPresets(isHot);
  const plugins = production ? ['react-optimize'] : [];

  return [
    { test: /\.jsx?$/, enforce: 'pre', exclude: PATHS.modules, loader: 'eslint-loader' },
    { test: /\.jsx?$/, loader: 'babel-loader', options: { presets, plugins }, exclude: PATHS.modules },
  ];
};