function randomGame(w, h) {
  return Array.from(new Array(h), () => Array.from(new Array(w), () => Math.round(Math.random())));
  /*
  return [
    ...Array(h),
  ].fill([
    ...Array(w),
  ].map(() => Math.round(Math.random())));
  */
}

module.exports = randomGame;
