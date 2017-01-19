module.exports = function finalMessage(won, player, ai) {
  if (won === ai) return 'This Round, you\'ve lost';
  if (won === player) return 'Won, You Have';
  return 'Draw it was';
};
