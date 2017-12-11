const Constants = require('../Constants');
// 0,4,8 2,4,6
const { _, O, X } = Constants.PLAYER;

function checkDiagonal(arr, str, n) {
  return str === arr[4] && str === arr[4 - n] && str === arr[4 + n];
}

function diagonals(arr, i) {
  const n = (i !== undefined) ? i : 4;
  if (arr[4] === _) return false;
  if (checkDiagonal(arr, O, n)) return O;
  if (checkDiagonal(arr, X, n)) return X;
  return (n > 2) ? diagonals(arr, n - 2) : false;
}

// 0,1,2 3,4,5 6,7,8
function checkRow(arr, str, n) {
  return arr[n] === arr[n + 1] && arr[n] === arr[n + 2] && arr[n] === str;
}

function rows(arr, i) {
  const n = (i !== undefined) ? i : 6;
  if (checkRow(arr, O, n)) return O;
  if (checkRow(arr, X, n)) return X;
  return (n > 0) ? rows(arr, n - 3) : false;
}


// 0,3,6 1,4,7 2,5,8
function checkCol(arr, str, n) {
  return arr[n] === arr[n + 3] && arr[n] === arr[n + 6] && arr[n] === str;
}

function cols(arr, i) {
  const n = (i !== undefined) ? i : 2;
  if (checkCol(arr, O, n)) return O;
  if (checkCol(arr, X, n)) return X;
  return (n > 0) ? cols(arr, n - 1) : false;
}


/* Give it an array */
module.exports = function getWinner(arr) {
  return diagonals(arr) || rows(arr) || cols(arr) || false;
};
