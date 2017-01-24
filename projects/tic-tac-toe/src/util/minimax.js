const isFull = require('./is-full');
const checkWinner = require('./check-winner');
const freeSpaces = require('./free-spaces');
const getScore = require('./score');
const getOpponent = require('./get-opponent');

module.exports = function minimax(board, player, depth, cpu, maxDepth) {
  const ai = (cpu !== undefined) ? cpu : player;
  const i = (depth !== undefined) ? depth : 0;
  /*  Exit Early and Return a Score */
  const winner = checkWinner(board);
  if (winner) return getScore(winner, ai, i);
  if (isFull(board)) return 0;
  /* If the board is empty */
  const spaces = freeSpaces(board);
  if (spaces.length === board.length) return Math.floor(Math.random() * board.length);
  // Difficulty
  if (i >= maxDepth) {
    return spaces[Math.floor(Math.random() * spaces.length)];
  }
  /* Calulcate free spaces and recurse in to potentual moves */
  const scores = spaces.map((space) => {
    const sim = board.slice();
    sim[space] = player;
    const score = minimax(sim, getOpponent(player), i + 1, ai);
    return { space, score };
  });
  /* Reduce the scores to the best choice */
  const best = scores.reduce((a, b) => {
    if (a.score < b.score && player === ai) { return b; }
    if (a.score > b.score && player !== ai) { return b; }
    return a;
  });
  /* Use A space and Score coupling to workout the best move */
  return (i === 0 && player === ai) ? (best.space) : (best.score);
};
