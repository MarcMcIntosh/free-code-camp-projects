const express = require('express');
const timestamp = require('./middleware');

const server = express();

server.use(timestamp);

server.listen(8080);
