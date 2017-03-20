const fillRect = require('./fillRect');

const arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const test1 = fillRect(arr, 1, {
  x: 0,
  y: 0,
}, {
  x: arr.length,
  y: arr[0].length,
});

console.log(test1);
