// const crypto = require('crypto');
const { resolve } = require('path');
const PouchDB = require('pouchdb-node');
const createDoc = require('./createDoc');
// PouchDB.plugin(require('pouchdb-find'));

const DATA_DIR = resolve(__dirname, '..', '..', '..', '..', 'data', 'url-shortener');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

function saveUrl(address, cb) {
  const doc = createDoc(address);
  return db.get(doc._id, (err) => {
    if (err) { return db.put(doc, cb); }
    return saveUrl(address, cb);
  });
}

function getUrl(id, cb) { return db.get(id, cb); }

module.exports = { saveUrl, getUrl };
