module.exports = function allClear(arr, x, y, width, height, type) {
  const n = arr.slice(x, x + width).map((d) => {
    const curr = d.slice(y, y + height);
    return curr.every(tile => tile === type) ? 1 : 0;
  }).reduce((a, b) => a + b, 0);
  return n === width;
};