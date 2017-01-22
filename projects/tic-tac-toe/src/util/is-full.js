const Constants = require('../Constants');

module.exports = function isFull(arr) {
  return arr.indexOf(Constants.PLAYER._) === -1;
};
