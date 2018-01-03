/* eslint global-require: 0 */
// Use this for a build proxied behind nginx
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import renderMiddleware from './render';

const app = express();
app.use(compression());
app.use(helmet());

app.get('/*', renderMiddleware);

app.listen(process.env.PORT || 8080);
