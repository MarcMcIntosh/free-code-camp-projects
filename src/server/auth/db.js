const { resolve } = require('path');
const PouchDB = require('pouchdb-node').plugin(require('pouchdb-upsert'));
const ddocs = require('./ddocs');

const DATA_DIR = resolve(__dirname, '..', '..', '..', 'data', 'auth');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

ddocs.forEach((d, i, a) => {
  const name = d._id.replace(/^_design\//, '');
  db.upsert(d._id, (diff) => {
    const str1 = JSON.stringify(d.views);
    const str2 = JSON.stringify(diff.views);
    return str1 !== str2 ? d : false;
  }, (err, res) => {
    if (!err && res.updated) {
      Object.keys(d.views).forEach((dd, ii, aa) => {
        const qs = name + '/' + dd;
        db.query(qs, {
          limit: 0,
        }, () => (i === a.length - 1 && ii === aa.length - 1 ? db.viewCleanup(() => void 0) : void 0));
      });
    }
  });
});

module.exports = db;
