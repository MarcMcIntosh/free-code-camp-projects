module.exports = function moveReducer(arr, curr, ai) {
  return arr.reduce((a, b) => {
    if (a < b && curr === ai) {
      return b;
    } else if (a > b && curr !== ai) {
      return b;
    }
    return a;
  });
};
