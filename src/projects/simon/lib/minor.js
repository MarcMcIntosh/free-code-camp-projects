module.exports = function minor(arr) {
  return arr.filter((d, i) => {
    switch (i) {
      case 0:
      case 2:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: return true;
      default: return false;
    }
  });
};
