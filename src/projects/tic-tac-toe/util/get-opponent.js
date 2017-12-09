const Constants = require('../Constants');

module.exports = function getOpponent(player) {
  const { X, O } = Constants.PLAYER;
  return (player === X) ? O : X;
};
