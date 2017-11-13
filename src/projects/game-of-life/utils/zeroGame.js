function zeroGame(w, h) {
  return [...Array(h)].fill([...Array(w)].fill(0));
}

module.exports = zeroGame;
