const Constants = require('../Constants');

module.exports = function score(winner, player, i = 0) {
  if (!winner || winner === Constants.PLAYER._) {
    return 0;
  }
  return (winner === player) ? (10 - i) : (i - 10);
};
