/* eslint global-require: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import helmet from 'helmet';
import compression from 'compression';
import { ENV } from '../common/env';
import renderMiddleware from './render/middleware';
import apps from './apps';

const app = express();

if (ENV === 'development') {
  // enable webpack hot module replacement
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack/webpack.config');
  const devBrowserConfig = webpackConfig({ browser: true });
  const compiler = webpack(devBrowserConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
} else if (ENV === 'production') {
  app.use(compression());
  app.use(helmet());
}

app.use(express.static(path.join(process.cwd(), 'dist', 'public')));
app.use(apps);
app.get('/*', renderMiddleware);

app.listen(process.env.PORT || 8080);
