const toId = require('to-id');

function createDoc(term) {
  const str = String(term).trim();
  const now = Date.now();
  const id = `term:${toId(str)}:time${now}`;
  const type = 'search';
  return { _id: id, created_at: now, updated_at: now, term, type };
}

module.exports = createDoc;
