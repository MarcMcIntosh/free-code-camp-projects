const placeRoom = require('./placeRoom');
const init = require('./init');

module.exports = function createMap(w = 100, h = 100, maxRs = 20, minRs = 6, maxHl = 5, n = 20) {
  let arr = init(Math.round(w / 10), Math.round(h / 10));
  for (let i = 0; i < n; i += 1) {
    arr = placeRoom(arr, maxRs, minRs);
  }
  return arr;
};
