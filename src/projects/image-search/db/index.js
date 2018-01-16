const { resolve } = require('path');
const PouchDB = require('pouchdb-node');
const pouchdbFind = require('pouchdb-find');
const createDoc = require('./createDoc');

PouchDB.plugin(pouchdbFind);

const CWD = process.cwd();
const DATA_DIR = resolve(CWD, '.data');
const db = new PouchDB('image-search', { prefix: DATA_DIR, auto_compaction: true });

function save(term, cb) {
  const toSave = createDoc(term);
  return db.get(toSave._id, (err, res) => {
    const doc = Object.assign({}, toSave, res, { updated_at: toSave.time });
    return db.put(doc, cb);
  });
}

function latest(cb) {
  db.createIndex({
    name: 'latest',
    ddoc: 'latest',
    fields: ['type', 'updated_at'],
  }, () => {
    db.find({
      selector: {
        type: 'search',
        updated_at: { $gt: 0 },
      },
      fields: ['term', 'updated_at'],
      sort: [{ updated_at: 'desc' }],
      limit: 20,
    }, cb);
  });
}


module.exports = { save, latest };
