module.exports = function shorten(hash) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  for (let i = parseInt(hash, 16); i > 0; i = Math.floor(i / chars.length)) {
    str += chars[i % chars.length];
  }
  return str;
};
