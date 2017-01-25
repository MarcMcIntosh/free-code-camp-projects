module.exports = function arpeggio(SCALE, offset = 0) {
  const tonic = SCALE[offset];
  const third = SCALE[offset + 2] || SCALE[offset - 6] * 2;
  const fifth = SCALE[offset + 4] || SCALE[offset - 5] * 2;
  const octive = SCALE[offset] * 2;
  return [tonic, third, fifth, octive];
};
