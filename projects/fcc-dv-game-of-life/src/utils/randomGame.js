function randomGame(w, h) {
  return [
    ...Array(h),
  ].fill([
    ...Array(w),
  ].map(() => Math.round(Math.random())));
}

module.exports = randomGame;
