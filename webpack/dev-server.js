require('colors');
const { resolve } = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('./client.dev');
const serverConfig = require('./server.dev');
const clientConfigProd = require('./client.prod');
const serverConfigProd = require('./server.prod');
const api = require('../src/server/api');

const publicPath = clientConfig.output.publicPath;
const outputPath = clientConfig.output.path;
const DEV = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 8080;
const app = express();

const FAVICON_PATH = resolve(__dirname, '..', 'src', 'common', 'assets', 'favicon.png');

app.use(favicon(FAVICON_PATH));
app.use('/api', api);

let isBuilt = false;

const done = () => !isBuilt && app.listen(PORT, () => {
  isBuilt = true;
  console.log(`BUILD COMPLETE -- Listening @ http://localhost:${PORT}`.magenta);
});

if (DEV) {
  const compiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = compiler.compilers[0];
  const options = { publicPath,
    stats: {
      colors: true,
      modules: false,
      // children: false,
    },
  };

  app.use(webpackDevMiddleware(compiler, options));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));
  compiler.plugin('done', done);
} else {
  webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const serverRender = require('../build/server').default; // eslint-disable-line
    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({ clientStats }));
    done();
  });
}
