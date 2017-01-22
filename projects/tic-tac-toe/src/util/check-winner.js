const Constants = require('../Constants');
// 0,4,8 2,4,6

function diagonals(arr, i = 2, c = 4) {
  if (arr[c] === Constants.PLAYER._) {
    return false;
  } else if (arr[c] === (arr[c - i] && arr[c + i])) {
    return arr[c];
  } else if (i < c) {
    return diagonals(arr, i * 2);
  }
  return false;
}
// 0,1,2 3,4,5 6,7,8
function rows(arr, i = 1) {
  const n = i + 3;
  if (
    arr[i] !== Constants.PLAYER._ &&
    arr[i] === (arr[i - 1] && arr[i + 1])
  ) {
    return arr[i];
  } else if (n < arr.length) {
    return rows(arr, n);
  }
  return false;
}
// 0,3,6 1,4,7 2,5,8
function cols(arr, i = 3) {
  if (
    arr[i] !== Constants.PLAYER._ &&
    arr[i] === (arr[i - 3] && arr[i + 3])
  ) {
    return arr[i];
  } else if (i + 4 < arr.length) {
    return cols(arr, i + 1);
  }
  return false;
}

/* Give it an array */
module.exports = function getWinner(arr) {
  return diagonals(arr) || rows(arr) || cols(arr) || null;
};
