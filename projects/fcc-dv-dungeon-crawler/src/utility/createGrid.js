function createGrid(w, h, val) {
  const arr = [];
  for (let i = 0; i < w; i += 1) {
    arr[i] = [];
    for (let j = 0; j < h; j += 1) {
      arr[i][j] = val;
    }
  }
  return arr;
}

export default createGrid;
