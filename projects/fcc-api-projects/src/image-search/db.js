const PouchDB = require('pouchdb-node').plugin(require('pouchdb-find'));
// PouchDB.debug.enable('*');

const db = new PouchDB('data', {
  // adapter: 'leveldb',
  auto_compaction: true,
});
//

module.exports = { save, latest };


/* Security precaution for searches like _all_docs */
function encode_id(str) {
  return Buffer.from(str).toString('base64');
}
function decode_id(id) {
  return Buffer.from(id, 'base64').toString();
}

function save(str, cb) {
  const term = String(str).trim();
  const _id = encode_id(term);
  db.get(_id, (err, doc) => {
    const o = Object.assign({
      _id,
      term,
    }, doc, {
      time: Date.now(),
   });
   return db.put(o, cb);
 });
}

function latest(cb) {
  db.createIndex({ name: 'latest', ddoc: 'latest', fields: ['time']},(err, res) => {
    db.find({
      selector: { time: { $lte: Date.now() } },
      fields: ['term'],
      sort: [{time: 'desc'}],
      limit: 20,
    }, cb);
  });
}
