const isWall = require('./isWall');

module.exports = function findWall(arr) {
  const coords = { x: 0, y: 0 };
  let openDir = false;
  do {
    coords.x = Math.floor(Math.random() * arr.length);
    coords.y = Math.floor(Math.random() * arr[0].length);
    openDir = isWall(arr, coords);
  } while (!openDir);

  return { coords, openDir };
};
