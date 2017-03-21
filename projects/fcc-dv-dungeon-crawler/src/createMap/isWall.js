const tileType = require('../constants').tileType;

const { WALL, FLOOR } = tileType;

function isWall(arr, x, y) {
  if (arr[x][y] !== WALL) { return false; }
  // left is open
  if (typeof arr[x - 1] !== 'undefined' && arr[x - 1][y] === FLOOR) { return 'left'; }
  // right is open
  if (typeof arr[x + 1] !== 'undefined' && arr[x + 1][y] === FLOOR) { return 'right'; }
  // top is open
  if (arr[x][y - 1] === FLOOR) { return 'top'; }
  // bottom is open
  if (arr[x][y + 1] === FLOOR) { return 'bottom'; }

  return false;
}

module.exports = isWall;
