const isWall = require('../isWall');
const WALL = require('../../constants').tileType.WALL;
const a = require('./testBoard');


const run = (arr, x, y) => {
  const t = arr[x][y] === WALL ? 'WALL' : 'FLOOR';
  const res = isWall(arr, x, y);
  console.log(`Testing ${x}.${y}, is: ${t}, returned: ${res}`);
};

run(a, 0, 0);
run(a, 1, 1);
run(a, 2, 2);
