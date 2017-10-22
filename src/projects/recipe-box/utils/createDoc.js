const formatId = (str = '', n) => {
  const nospace = str.replace(/\s/g, '-');
  const name = encodeURIComponent(nospace).split('%').join('');
  return `recipe:${name}:@:${n}`;
};

const createDoc = (payload) => {
  const timestamp = new Date().toJSON();
  const _id = payload._id || formatId(payload.name, timestamp);
  return Object.assign({
    _id,
    created_at: timestamp,
  }, payload, { updated_at: timestamp });
};

export default createDoc;
