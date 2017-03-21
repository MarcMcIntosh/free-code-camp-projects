const fillRect = require('./fillRect');
const tileType = require('../constants').tileType;

module.exports = function init(w, h) {
  const arr = Array.from(Array(w), () => Array.from(Array(h), () => tileType.WALL));
  const x = Math.floor(Math.random() * (w + 1));
  const y = Math.floor(Math.random() * (h + 1));
  return fillRect(arr, x, y, w, h, tileType.FLOOR);
};
