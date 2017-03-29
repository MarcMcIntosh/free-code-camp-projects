// import _ from 'lodash';

function fillRect(arr, x, y, x1, y1, val) {
  const rect = arr.slice();
  for (let i = x; i < x + x1; i += 1) {
    for (let j = y; j < y + y1; j += 1) {
      rect[i][j] = val;
    }
  }
  return rect;
}

/*
export default function (map, startCoord, size, fillVal) {
  for (let i = startCoord.x; i < startCoord.x + size.x; i += 1) {
    _.fill(map[i], fillVal, startCoord.y, size.y + startCoord.y);
  }
  return map;
}
*/
export default fillRect;
