const isFull = require('./is-full');
const checkWinner = require('./check-winner');
const freeSpaces = require('./free-spaces');
const score = require('./score');
const getOpponent = require('./get-opponent');
const moveReducer = require('./move-reducer');

module.exports = function minimax(board, player, depth, cpu) {
  const ai = (cpu !== undefined) ? cpu : player;
  const i = (depth !== undefined) ? depth : 0;
  /* Early Exit */
  const winner = checkWinner(board);
  if (winner) return score(winner, i);
  if (isFull(board)) return 0;
  /* Calulcate free spaces and recurse in to potentual moves */
  const spaces = freeSpaces(board);
  const moves = spaces.map((d) => {
    const sim = board.slice();
    sim[d] = player;
    return minimax(sim, getOpponent(player), i + 1, ai);
  });
  /* Fgiure out if simulating or not */
  if (i === 0 && player === ai) {
    return moveReducer(spaces, player, ai);
  }
  return moveReducer(moves, player, ai);
};
