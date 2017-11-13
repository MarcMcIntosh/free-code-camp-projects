const nextGame = require('./nextGame');

const glider = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

for (let i = 0, g = glider; i < 5; i += 1) {
  g = nextGame(g);
  console.log(g);
}
