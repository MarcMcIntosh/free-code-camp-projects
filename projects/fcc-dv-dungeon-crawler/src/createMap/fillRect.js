
module.exports = function fillRect(arr, val, coords, size) {
  return arr.map((d, i) => ((
    i >= coords.x && i < coords.x + size.x
  ) ? d.fill(val, coords.y, coords.y + size.y) : d));
};
