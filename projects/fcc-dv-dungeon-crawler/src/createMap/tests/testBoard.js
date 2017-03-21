const tileType = require('../../constants').tileType;

const { WALL, FLOOR } = tileType;

module.exports = [
  [WALL, WALL, WALL, WALL, WALL],
  [WALL, FLOOR, FLOOR, FLOOR, WALL],
  [WALL, FLOOR, FLOOR, FLOOR, WALL],
  [WALL, FLOOR, FLOOR, FLOOR, WALL],
  [WALL, WALL, WALL, WALL, WALL],
];
