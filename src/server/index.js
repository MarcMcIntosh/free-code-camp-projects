import { Router } from 'express';
import render from './render';
import api from './api';

export default ({ clientStats, outputPath }) => {
  const router = Router();
  router.use('/api', api);
  router.use(render({ clientStats, outputPath }));
  return router;
};
