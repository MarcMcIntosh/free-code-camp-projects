const { resolve } = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const compression = require('compression');
const clientStats = require('./build/stats.json');
const renderer = require('./build/server').default;
require('dotenv').config();

const port = process.env.PORT || 8080;
const FAVICON_PATH = resolve(__dirname, 'src', 'common', 'assets', 'favicon.png');
const outputPath = resolve(__dirname, 'build', 'client');

const server = renderer({ clientStats, outputPath });

const app = express();
app.use(helmet());
app.use(compression());
app.use(favicon(FAVICON_PATH));
app.use(express.static(outputPath));
// app.use('/api', server.api);
// console.log(server.api);
app.use(server);
app.listen(port, () => { console.log('listening', port); });
