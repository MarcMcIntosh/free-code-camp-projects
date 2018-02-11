const { resolve } = require('path');
const PouchDB = require('pouchdb-node');
const authUsers = require('./ddoc');

const DATA_DIR = resolve(__dirname, '..', '..', '..', 'auth');

const db = new PouchDB(DATA_DIR);

const viewName = str => authUsers._id.replace(/^_design\//, '') + '/' + str;
const buildView = str => db.query(str, { limit: 0 }, () => void 0);

/* Check _design/users exists and has same values, update is nessacary */
db.get(authUsers._id, (err, res) => {
  const hasViews = res && Object.prototype.hasOwnProperty.call(res, 'views');
  const shouldUpdate = hasViews && JSON.stringify(authUsers.views) !== JSON.stringify(res.views);
  const ddoc = Object.assign({}, res, authUsers);

  if (!hasViews || shouldUpdate) {
    const toBuild = Object.keys(authUsers.views).map(d => viewName(d));
    db.put(ddoc, () => toBuild.forEach(view => buildView(view)));
  }
});

module.exports = db;
