const Constants = require('../Constants');

const { O, X } = Constants.PLAYER;

module.exports = function finalMessage(won) {
  if (won === O) return 'Blue Team Wins!';
  if (won === X) return 'Red Team Wins!';
  return 'Draw!';
};
