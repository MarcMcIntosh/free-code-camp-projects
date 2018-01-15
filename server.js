const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const routes = require('./build/server').default;
const stats = require('./build/stats.json');

const server = routes(stats);

const port = process.env.PORT || 8080;

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.static('./build/client'));
app.use(server);
app.listen(port, () => { console.log('listening'); });
