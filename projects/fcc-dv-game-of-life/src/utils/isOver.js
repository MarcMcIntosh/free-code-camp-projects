function isOver(arr1, arr2) {
  const isSame = arr1.filter((d, i) => d.join('') === arr2[i].join(''));
  return !(isSame.length === arr2.length);
}

module.exports = isOver;
