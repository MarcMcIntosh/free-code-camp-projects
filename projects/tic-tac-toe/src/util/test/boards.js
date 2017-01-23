const Constants = require('../../Constants');

const { _, O, X } = Constants.PLAYER;

const empty = [
  _, _, _,
  _, _, _,
  _, _, _,
];

const row0 = [
  O, O, O,
  _, _, _,
  _, _, _,
];


const row1 = [
  _, _, _,
  X, X, X,
  _, _, _,
];

const row2 = [
  _, _, _,
  _, _, _,
  O, O, O,
];

const col0 = [
  X, _, _,
  X, _, _,
  X, _, _,
];

const col1 = [
  _, O, _,
  _, O, _,
  _, O, _,
];

const col2 = [
  _, _, X,
  _, _, X,
  _, _, X,
];

const dia0 = [
  O, _, _,
  _, O, _,
  _, _, O,
];

const dia1 = [
  _, _, X,
  _, X, _,
  X, _, _,
];

/* This fails  O win*/
/* Row */ /* Diagonal */
const game0 = [
  X, _, _,
  _, O, X,
  O, X, O,
];
/* This fails X win */
/* Row */
const game1 = [
  _, _, _,
  _, _, X,
  O, X, X,
];


const tests = { empty, row0, row1, row2, col0, col1, col2, dia0, dia1, game0, game1 };

module.exports = tests;
