const { resolve } = require('path');
const PouchDB = require('pouchdb-node').plugin(require('pouchdb-find'));
const createDoc = require('./createDoc');

const DATA_DIR = resolve(__dirname, '..', '..', '..', '..', 'data', 'image-search');
const db = new PouchDB(DATA_DIR, { auto_compaction: true });

// const db = new PouchDB('http://127.0.0.1:5984/image-search');

function save(term, cb) {
  const doc = createDoc(term);
  return db.get(doc._id, (err, res) => {
    if (err) { return db.put(doc, cb); }
    res.updated_at = Date.now();
    res.times += 1;
    return db.put(res, cb);
  });
}

function latest(cb) {
  db.createIndex({
    name: 'latest',
    ddoc: 'latest',
    fields: ['updated_at'],
  }, () => {
    db.find({
      selector: { type: 'search', updated_at: { $gte: null } },
      fields: ['term', 'updated_at', '_id'],
      sort: [{ updated_at: 'desc' }],
      limit: 20,
    }, cb);
  });
}


module.exports = { save, latest };
