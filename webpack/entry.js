const path = require('path');
const PATHS = require('./paths');

const SRV_ENTRY = path.resolve(PATHS.src.server, 'index.js');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

function server() {
  return { server: SRV_ENTRY };
}

const AppDir = path.resolve(PATHS.src.client, 'index.jsx');

function client(production = false) {
  const base = {
    app: [AppDir],
  };
  return (production) ? base : Object.keys(base).reduce((a, b) => {
    a[b].push(hotMiddlewareScript);
    return a;
  }, base);
}
module.exports = ({ production = false, browser = false } = {}) => ((browser) ? client(production) : server());
