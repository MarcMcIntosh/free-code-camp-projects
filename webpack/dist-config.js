const conf = require('./base.config.js');

const client = conf({ server: false, production: true, dist: true });
const server = conf({ server: true, production: true, dist: true });

module.exports = [client, server];
