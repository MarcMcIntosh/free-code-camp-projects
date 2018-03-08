const { resolve } = require('path');
/* this stops emitter warnings */
require('events').EventEmitter.defaultMaxListeners = 0;


const session = require('express-session');
const PouchSession = require('session-pouchdb-store');
/* const SQLiteStore = require('connect-sqlite3')(session);
* CLustering issue,
* Error Code SQLITE_LOCKED (6): Database Is Locked
* https://github.com/rawberg/connect-sqlite3/issues/15
*
* sqlite3 sessions.db 'pragma journal_mode=wal;'
* const FileStore = require('session-file-store')(session);
*/

const DATA_DIR = resolve(__dirname, '..', '..', '..', 'data', 'sessions');

const SECRET_KEY = require('./key');

const MAX_AGE = 1000 * 60 * 60 * 24 * 3; // 3 days,
module.exports = session({
  resave: false,
  saveUninitialized: true,
  rolling: true,
  secret: SECRET_KEY,
  store: new PouchSession(DATA_DIR),
  // store: new FileStore({ path: DATA_DIR }),
  // store: new SQLiteStore({ dir: DATA_DIR, db: 'sessions.db' }),
  cookie: { maxAge: MAX_AGE },
});
