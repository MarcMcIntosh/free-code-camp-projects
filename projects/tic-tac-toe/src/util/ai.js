/* Use https://facebook.github.io/immutable-js/
and look at this
https://github.com/deepsyx/Redux_TicTacToe
*/
import Constants from '../Constants';
import gameOver from './check-winner';
import isFull from './is-full';

class AI {
  constructor(game, player) {
    this.move = null;
    this.player = player;
    this.opposition = (player === Constants.PLAYER.X) ? (Constants.PLAYER.O) : (Constants.PLAYER.X);
    this.minimax(game, player, 0);
    return this.move;
  }
  freeSpaces(arr) {
    const stack = [];
    arr.forEach((d, i) => {
      if (d !== (this.player || this.opposition)) {
        stack.push(i);
      }
    });
    return stack;
  }
  score(result, i) {
    if (result === this.player) {
      return 10 - i;
    } else if (result === this.opposition) {
      return i - 10;
    }
    return 0;
  }
  minimax(arr, player, i) {
    // Check if the game has a winner
    const winner = gameOver(arr);
    if (winner) return this.getScore(winner, i);
    if (isFull(arr)) return 0;

    const spaces = this.freeSpaces(arr);
    const mem = [];
    // Simulate taking a move in each space and the opposing players options
    spaces.forEach((d) => {
      const copy = arr.slice();
      copy[d] = this.player;
      const oMove = this.minimax(copy, this.opposition, i + 1);
      mem.push(oMove);
    });

    // Calulate the best move to take
    let res = mem[0];
    let pMove = spaces[0];
    for (let n = 1; n < mem.length; n += 1) {
      if (
        (mem[n] > res && player === this.player) ||
        (mem[n] < res && player === this.opposition)
      ) {
        res = mem[n];
        pMove = spaces[n];
      }
    }
    if (i === 0 && player === this.player) {
      this.move = pMove;
    }
    return res;
  }
}

export default AI;
