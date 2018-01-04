/* eslint global-require: 0 */
// Use this for a build proxied behind nginx
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import renderMiddleware from './render';

/* change to router */
/* leave the top leavel config in the main index.jsx file */
const app = express();
app.use(compression());
app.use(helmet());

// app.get('/*', renderMiddleware);
app.all('*', (req) => {
  console.log(req.url);
}, renderMiddleware);
app.listen(process.env.PORT || 8080, () => {
  console.log('listening');
});
