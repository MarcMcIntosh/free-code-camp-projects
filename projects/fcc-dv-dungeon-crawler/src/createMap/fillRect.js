module.exports = function fillRect(arr, x, y, w, h, val) {
  return arr.map((d, i) => ((i >= x && i < x + w) ? d.fill(val, y, y + h) : d));
};
