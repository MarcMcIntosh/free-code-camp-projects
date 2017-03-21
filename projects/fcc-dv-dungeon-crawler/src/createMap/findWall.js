const isWall = require('./isWall');

module.exports = function findWall(arr) {
  let x = 0;
  let y = 0;
  let openDir = false;
  do {
    x = Math.floor(Math.random() * arr.length);
    y = Math.floor(Math.random() * arr[0].length);
    openDir = isWall(arr, x, y);
  } while (!openDir);

  return {
    coords: { x, y },
    openDir,
  };
};
