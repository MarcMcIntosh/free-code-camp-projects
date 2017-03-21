const fillRect = require('./fillRect');
const findWall = require('./findWall');
const startFrom = require('./startFrom');
const allClear = require('./allClear');
const tileType = require('../constants');

const { WALL, FLOOR } = tileType;

function placeRoom(arr, max, min) {
  // let numClear = 0;
  const wall = findWall(arr);
  const width = Math.floor((Math.random() * (max - min)) + min);
  const height = Math.floor((Math.random() * (max - min)) + min);

  const { x, y } = startFrom(wall.openDir, wall.coords.x, wall.coords.y, width, height);

  // Exit if room would be outside matrix
  if (
    x < 0 || y < 0 || x + width >= arr.length || y + height >= arr[0].length
  ) {
    return placeRoom(arr, max, min);
  }
  // check if all spaces are clear

  const isClear = allClear(arr, x, y, width, height, WALL);
  if (isClear) {
    const arr2 = fillRect(arr, FLOOR, { x, y }, { x: width, y: height });

    arr2[wall.coords.x][wall.coords.y] = 1;
    return arr2;
  }
  return placeRoom(arr, max, min);
}

module.exports = placeRoom;
