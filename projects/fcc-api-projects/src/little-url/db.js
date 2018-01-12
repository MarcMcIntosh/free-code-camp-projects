const crypto = require('crypto');
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));

const db = new PouchDB('./urls', {
  auto_compaction: true,
});

module.exports = {
  save_url: pre_save,
  /* wrapper around db.get(id, cb) */
  load_url: function(id, cb) { return db.get(id, cb); },
};


function md5(str) {
  return  crypto.createHash('md5').update(str).digest('hex');
}

function shorten(hash) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = '';
  for(let i = parseInt(hash, 16); i > 0; i = Math.floor(i / chars.length)) {
    str += chars[i % chars.length];
  }
  return str;
}
/* add a pre save look up for duplicates */

/* Creates or updates a doc used by pre-save */
function add_url_doc(obj, cb) {
  const timestamp = Date.now();
  return db.get(obj._id, (err, doc) => {
    const docObj = Object.assign({
      created_at: timestamp,
    }, doc, obj, { updated_at: timestamp });
    return db.put(docObj, cb);
  });
}

/* Checks if address exists and cleans up dupicates */
function pre_save(addr, cb) {
  return db.createIndex({
    name: 'long_urls',
    ddoc: 'long_urls',
    fields: ['long_url'],
  }, () => {
    return db.find({
      selector: { long_url: addr },
    }, (err, res) => {
      if(err) return cb(err);
      if(res.docs.length === 0) {
        return save_url(addr, cb);
      };
      if(res.docs.length === 1) {
        return add_url_doc(res.docs[0], cb);
      }
      const docs = res.docs.sort((a, b) => a._id.length - b._id.length).map((d, i) => {
        if(i) {  } else { d['_deleted'] = true; } return d;
      });
      return db.bulkDocs(docs, () => {
        return setImmediate(() => pre_save(addr, cb));
      });
    });
  });
};

/*
create a unique doc to add to the database after checs have been made
 */
function save_url(addr, cb) {
  const long_url = addr;
  const hash = md5(addr);
  const long_id = shorten(hash);
  const short_id = long_id.substring(0, 3);
  // const eKey = short_id.concat('\ufff0');
  const eKey = short_id.concat('\uffff');
  db.allDocs({
    startkey: short_id,
    endkey: eKey,
  }, (err, response) => {
    if(err) { return cb(err); }

    if(response.rows.length === 0) {
      return add_url_doc({ _id: short_id, long_url, hash, long_id }, cb);
    }
    const d_ids = response.rows.map(d => d.id).filter((d) => long_id.includes(d));

    if(d_ids.length === 0) { return add_url_doc({ _id: short_id, long_url, hash, long_id }, cb); }
    /* Iteracte through these docs and find a suitable uuid */
    return db.allDocs({
      include_docs: true,
      keys: d_ids,
    }, (err, resp) => {
      if(err) { return cb(err); }

      // const docs = resp.rows.map(d => d.doc);
      const longest_id_length = resp.rows.map(d => d.id).reduce((a, b) => ((a.length > b.length) ? a.length : b.length), 0);

      const timestamp = Date.now();
      const id = long_id.substr(0, longest_id_length + 1);

      return add_url_doc({ _id: id, long_url, hash, long_id }, cb);
    });
  });
}
