const path = require('path');
const session = require('express-session');
const PouchSession = require('session-pouchdb-store');
// const PouchDB = require('pouchdb-node');
// const PouchDB = require('pouchdb');

const DATA_DIR = path.resolve(__dirname, '..', '..', '..', 'data', 'sessions');
const SECRET_KEY = require('./key');

// const sessionDB = new PouchDB(DATA_DIR, { adapter: 'leveldb' });
// const sessionDB = new PouchDB(DATA_DIR);

const MAX_AGE = 1000 * 60 * 60 * 24 * 3; // 3 days,
module.exports = session({
  secret: SECRET_KEY,
  // resave: true,
  resave: false,
  saveUninitialized: true,
  maxAge: MAX_AGE,
  store: new PouchSession(DATA_DIR),
});
