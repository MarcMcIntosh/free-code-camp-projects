function nextGame(arr) {
  return arr.map((col, i) => {
    const above = arr.slice[i - 1];
    const below = arr.slice[i + 1];
    /* middle */
    return col.map((row, ii) => {
      const l = ii - 1; /* Left */
      const r = ii + 1; /* Right */
      const n = [
        ...above.slice(l, r),
        ...below.slice(l, r),
        ...col.slice(l, 1),
        ...col.slice(r, 1),
      ].reduce((a, b) => a + b);
      return (n === 3 || row + n === 3) ? 1 : 0;
    });
  });
}

module.exports = nextGame;
