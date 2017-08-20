const { resolve } = require('path');

const ROOT_DIR = process.cwd();

const DIST_DIR = resolve(ROOT_DIR, 'dist');
const DIST_SRV = resolve(DIST_DIR, 'server');
const DIST_PUB = resolve(DIST_DIR, 'public');

const SRC_DIR = resolve(ROOT_DIR, 'src');
const SRC_SRV = resolve(SRC_DIR, 'server');
const SRC_APP = resolve(SRC_DIR, 'app');

const PROJECT_DIR = resolve(ROOT_DIR, 'projects');
const NODE_MODULES_DIR = resolve(ROOT_DIR, 'node_modules');
const tribute = resolve(PROJECT_DIR, 'tribute-page', 'index.jsx');

module.exports = {
  root: ROOT_DIR,
  dist: { public: DIST_PUB, server: DIST_SRV },
  src: { client: SRC_APP, server: SRC_SRV },
  projects: { tribute },
  modules: NODE_MODULES_DIR,
};
