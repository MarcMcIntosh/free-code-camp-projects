const { resolve } = require('path');
const PouchDB = require('pouchdb-node');
const md5 = require('./md5');
const shortenHash = require('./shortenHash');
const viewByAddress = require('./viewByAddress');

const DATA_DIR = resolve(__dirname, '..', '..', '..', '..', 'data', 'url-shortener');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

// save the design doc
db.get(viewByAddress._id, (e, res) => {
  const doc = Object.assign({}, res, viewByAddress);
  return db.put(doc, () => void 0);
});

function updateAddress(docid, cb) {
  return db.get(docid, (err, res) => {
    const { id, rev, ...rest } = res;
    const obj = { _id: id, _rev: rev, ...rest, updated_at: Date.now() };
    return db.put(obj, cb);
  });
}

function saveAddress(address, cb) {
  const hash = md5(address);
  const longId = shortenHash(hash);
  const startkey = longId.substring(0, 3);
  const endkey = startkey.concat('\ufff0');
  const timestamp = Date.now();
  const doc = { _id: startkey, created_at: timestamp, updated_at: timestamp, address };
  return db.allDocs({ startkey, endkey }, (err, res) => {
    if (err) { return cb(err); }
    if (res.rows.length === 0) { return db.put(doc, cb); }
    const n = res.rows.map(d => d.id).filter(d => !longId.search(d)).map(d => d.length).reduce((a, b) => (a < b ? b : a), 4);
    doc._id = longId.substring(0, n);
    return db.put(doc, cb);
  });
}

function saveUrl(address, cb) {
  return db.query('by_address', { key: address }, (err, res) => {
    if (err) { return cb(err); }
    if (res.rows.length > 0) { return updateAddress(res.rows[0].id, cb); }
    return saveAddress(address, cb);
  });
}


function getUrl(id, cb) { return db.get(id, cb); }

module.exports = { saveUrl, getUrl };
