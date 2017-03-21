const fillRect = require('./fillRect');
const findWall = require('./findWall');
const startFrom = require('./startFrom');
const allClear = require('./allClear');
const tileType = require('../constants');

const { WALL, FLOOR } = tileType;

function placeRoom(arr, max, min) {
  const wall = findWall(arr);
  const w = Math.floor((Math.random() * (max - min)) + min);
  const h = Math.floor((Math.random() * (max - min)) + min);

  const { x, y } = startFrom(wall.openDir, wall.coords.x, wall.coords.y, w, h);

  const isClear = allClear(arr, x, y, w, h, WALL);
  const isOut = (x < 0 || y < 0 || x + w >= arr.length || y + h >= arr[0].length);

  if (!isOut && isClear) {
    const arr2 = fillRect(arr, x, y, w, h, FLOOR);
    arr2[wall.coords.x][wall.coords.y] = 1;
    return arr2;
  }
  return placeRoom(arr, max, min);
}

module.exports = placeRoom;
