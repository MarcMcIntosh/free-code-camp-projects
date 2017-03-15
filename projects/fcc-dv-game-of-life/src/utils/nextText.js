const nextGame = require('./nextGame');

const curr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const nxt = nextGame(curr);

console.log(nxt);
console.log(nextGame(nxt));
