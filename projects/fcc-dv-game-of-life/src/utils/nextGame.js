function nextGame(arr) {
  return arr.map((col, i) => {
    const above = (i === 0) ? arr[arr.length - 1] : arr[i - 1];
    const below = (i === arr.length - 1) ? arr[0] : arr[i + 1];
    return col.map((row, ii) => {
      const left = (ii === 0) ? col.length - 1 : ii - 1;
      const right = (ii === col.length - 1) ? 0 : ii + 1;
      const n = [
        above[left],
        above[ii],
        above[right],
        col[left],
        col[right],
        below[left],
        below[ii],
        below[right],
      ].reduce((a, b) => a + b);
      return (n === 3 || row + n === 3) ? 1 : 0;
    });
  });
}

module.exports = nextGame;
