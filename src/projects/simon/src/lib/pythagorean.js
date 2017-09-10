const getMajor = require('./major');
const getMinor = require('./minor');
/*
c 260.74  1:1
c# 278.44 2187:2048 ( 3 ** 7) / (2 ** 11)
d  293.33 9:8  ( 3 ** 2 ) / (2 ** 3)
eb 309.03 32:27
e  330.00 81:64
f 347.65 4:3
f# 371.25 729:512
g 391.11  3:2
g# 417.66 6561:4096
a  440.00 27:16
bb 463.54 16:9
b  495.00 243:128
c  521.48 2:1
*/
const CHROMATIC = [
  260.74,
  278.44,
  293.33,
  309.03,
  330,
  347.65,
  371.25,
  391.11,
  417.66,
  440.00,
  463.54,
  495.00,
  521.48,
];
module.exports = {
  CHROMATIC,
  MAJOR: getMajor(CHROMATIC),
  MINOR: getMinor(CHROMATIC),
};
