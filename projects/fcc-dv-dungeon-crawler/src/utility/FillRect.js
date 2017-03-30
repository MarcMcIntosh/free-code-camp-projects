function fillRect(arr, x, y, x1, y1, val) {
  const rect = arr.slice();
  for (let i = x; i < x + x1; i += 1) {
    for (let j = y; j < y + y1; j += 1) {
      rect[i][j] = val;
    }
  }
  return rect;
}

export default fillRect;
