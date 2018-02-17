const { resolve } = require('path');
const PouchDB = require('pouchdb-node').plugin(require('pouchdb-upsert'));
const ddoc = require('./ddoc');

const DATA_DIR = resolve(__dirname, '..', '..', '..', 'data', 'auth');

PouchDB.debug.enable('*');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

db.upsert(ddoc._id, (diff) => {
  const str1 = JSON.stringify(ddoc.views);
  const str2 = JSON.stringify(diff.views);
  return str1 !== str2 ? ddoc : false;
}, (err, res) => {
  if (!err && res.updated) {
    const name = ddoc._id.replace(/^_design\//, '');
    Object.keys(ddoc.views).forEach((d, i, a) => {
      const qs = name + '/' + d;
      db.query(qs, { limit: 0 }, () => (i === a.length - 1 ? db.viewCleanup(() => void 0) : void 0));
    });
  }
});

module.exports = db;
