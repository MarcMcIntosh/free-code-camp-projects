module.exports = function doorOffset(length) {
  return Math.floor((Math.random() * length) - Math.floor((length - 1) / 2));
};
