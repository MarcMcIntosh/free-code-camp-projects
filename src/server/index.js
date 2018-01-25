import { resolve } from 'path';
import { Router } from 'express';
import favicon from 'serve-favicon';
// import helmet from 'helmet';
// import compression from 'compression';
import render from './render';
import api from './api';

const FAVICON_PATH = resolve(__dirname, '..', 'common', 'assets', 'favicon.png');
/* change to router */
/* leave the top leavel config in the main index.jsx file */

const server = (clientStats) => {
  const router = Router();
  router.use(favicon(FAVICON_PATH));
  router.use('/api', api);
  router.use(render({ clientStats }));
  return router;
};

export default server;
