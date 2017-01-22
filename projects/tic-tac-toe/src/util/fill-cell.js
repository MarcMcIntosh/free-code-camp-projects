const Constants = require('../Constants');

const { PLAYER } = Constants;

module.exports = function fillCell(d) {
  return (!d || d === PLAYER._) ? '&nbsp;' : d;
};
