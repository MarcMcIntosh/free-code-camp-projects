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
  return db.put(doc, (err) => {
    if (err && err.name !== 'conflict') { return console.error(err); }
    return void 0;
  });
});

function updateAddress(doc, cb) {
  return db.get(doc._id, (err, res) => {
    const obj = Object.assign({}, res, { updated_at: Date.now() });
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
    doc._id = res.rows.map(d => d.id).filter(d => !longId.search(d)).map(d => d.length).reduce((a, b) => (a < b ? b : a), 4);
    return db.put(doc, cb);
  });
}

function saveUrl(address, cb) {
  return db.query('by_address', { key: address }, (err, res) => {
    if (err) { return cb(err); }
    if (res.rows.length === 0) { return saveAddress(address, cb); }
    if (res.rows.lennth === 1) { return updateAddress(res.rows[0], cb); }
    /* clean up matches keeping the shortest id */
    console.log(res.rows);
    const docs = res.rows.sort((a, b) => a.id.length - b.id.length).map((d) => {
      const { id, ...doc } = d;
      return { _id: id, ...doc };
    });
    const toRemove = docs.slice(1).map(d => Object.assign({}, d, { _deleted: true }));
    return db.bulkDocs(toRemove, () => updateAddress(docs[0], cb));
  });
}


function getUrl(id, cb) { return db.get(id, cb); }

module.exports = { saveUrl, getUrl };
