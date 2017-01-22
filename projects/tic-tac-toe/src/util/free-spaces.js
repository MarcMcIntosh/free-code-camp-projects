const Constants = require('../Constants');

module.exports = function freeSpaces(arr) {
  return arr.reduce((a, d, i) => ((d === Constants.PLAYER._) ? a.concat(i) : a), []);
};
