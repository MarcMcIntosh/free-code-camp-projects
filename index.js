const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const routes = require('./build/server').default;
const stats = require('./build/stats.json');

const renderMiddleware = routes(stats);

const port = process.env.PORT || 8080;

const app = express();
app.use(compression());
app.use(helmet());
app.use(express.static('./build/client'));
app.use(renderMiddleware);
app.listen(port, () => { console.log('listening'); });
