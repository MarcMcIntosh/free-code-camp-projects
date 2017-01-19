module.exports = function fillCell(d) {
  if (d === true) return 'O';
  if (d === false) return 'X';
  return ' ';
};
