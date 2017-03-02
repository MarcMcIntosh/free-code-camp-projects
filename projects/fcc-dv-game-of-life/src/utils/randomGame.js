function randomGame(w, h) {
  return [
    ...Array(h),
  ].fill([
    ...Array(w),
  ]).fill(Math.round(Math.random()));
}

module.exports = randomGame;
