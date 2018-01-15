
import { Router } from 'express';
// import helmet from 'helmet';
// import compression from 'compression';
import render from './render';
import api from './api';
/* change to router */
/* leave the top leavel config in the main index.jsx file */

const server = (clientStats) => {
  const router = Router();
  router.use(api);
  router.use(render({ clientStats }));
  return router;
};

export default server;
