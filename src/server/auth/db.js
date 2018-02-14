const { resolve } = require('path');
const PouchDB = require('pouchdb-node');
const ddocs = require('./ddocs');

const DATA_DIR = resolve(__dirname, '..', '..', '..', 'auth');

const db = new PouchDB(DATA_DIR);

const DDOCS_IDS = ddocs.map(ddoc => ddoc._id);

/* Check views for updates */

db.allDocs({ keys: DDOCS_IDS, include_docs: true }, (err, res) => {
  const resDocs = res.rows.reduce((a, b) => Object.assign({}, a, { [b.id]: b.doc }), {});

  const toRemove = Object.entries(resDocs).map(([k, v]) => {
    if (DDOCS_IDS.indexOf(k) === -1) {
      const ddoc = v;
      ddoc._deleted = true;
      return ddoc;
    }
    return undefined;
  }).filter(ddoc => ddoc);

  const arr = ddocs.map((ddoc) => {
    const curr = resDocs[ddoc._id] || null;
    if (!curr) { return arr.push(ddoc); }

    const str1 = JSON.stringify(resDocs[ddoc._id].views);
    const str2 = JSON.stringify(resDocs[ddoc.views]);
    if (str1 !== str2) { return Object.assign({}, curr, ddoc); }
    return undefined;
  }).filter(ddoc => ddoc).concat(toRemove);

  if (arr.length > 0) {
    db.bulkDocs(arr, () => {
      const viewArr = arr.map((d) => {
        const ddoc = d._id.replce(/^design\//, '');
        const views = Object.keys(d.views);
        return views.map(view => ddoc.concat('/', view));
      });

      const newViews = Array.prototype.concat.apply([], viewArr);
      newViews.forEach((view, i, a) => db.query(view, { limit: 0 }, () => {
        if (i === a.length - 1) { return db.viewCleanup(() => void 0); }
        return void 0;
      }));
    });
  }
});

module.exports = db;
