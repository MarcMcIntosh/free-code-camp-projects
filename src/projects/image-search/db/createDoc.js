const toId = require('to-id');

function createDoc(term) {
  // const str = String(term).trim();
  const type = 'search';
  const time = Date.now();
  const updated_at = time; // eslint-disable-line
  const created_at = time; // eslint-disable-line
  const times = 1;
  const _id = toId(term);

  return { _id, created_at, updated_at, term, type, times };
}

module.exports = createDoc;
