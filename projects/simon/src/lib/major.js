module.exports = function diatonic(arr) {
  return arr.filter((d, i) => {
    switch (i) {
      case 0:
      case 2:
      case 4:
      case 5:
      case 7:
      case 9:
      case 11:
      case 12: return true;
      default: return false;
    }
  });
};
