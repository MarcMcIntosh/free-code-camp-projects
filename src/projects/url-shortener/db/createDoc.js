const { generate } = require('shortid');

module.exports = function createDoc(address) {
  const _id = generate();
  const created_at = Date.now(); // eslint-disable-line
  return { _id, created_at, address };
};
