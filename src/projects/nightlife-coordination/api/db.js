const { resolve } = require('path');
const PouchDB = require('pouchdb-node');

const DATA_DIR = resolve(__dirname, '..', '..', '..', '..', 'data', 'nightlife');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

// events they have saved
function getUserAccount(req, res) {
  const str = `user:${req.user._id}:`;
  db.allDocs({
    startkey: str,
    endkey: str + '\u0ffff',
    include_docs: true,
  }, (err, repo) => {
    if (err) { res.json(err); }
    res.json(repo.rows);
  });
}

function saveEvent(req, res, next) {
  const str = `user:${req.user._id}:event:${req.params.id}`;
  const timestamp = new Date().toJSON();
  const doc = {
    _id: str,
    created_at: timestamp,
    updated_at: timestamp,
    created_by: req.user._id,
    event: req.params.id,
    type: 'event',
  };
  return db.get(doc._id, (err, cur) => {
    if (err.status !== 404) {
      return res.json(err);
    } else if (err.status === 404) {
      return db.put(doc, erro => next(erro));
    }
    const updatedDoc = Object.assign({}, cur, doc);
    updatedDoc.created_at = cur.created_at;
    return db.put(updatedDoc, erro => next(erro));
  });
}

function deleteEvent(req, res, next) {
  const str = `user:${req.user._id}:event:${req.params.id}`;
  return db.get(str, (err, resp) => {
    if (err) { return next(err); }
    const doc = Object.assign({}, resp, { _deleted: true });
    return db.put(doc, erro => next(erro));
  });
}

module.exports = {
  getUserAccount,
  saveEvent,
  deleteEvent,
};
