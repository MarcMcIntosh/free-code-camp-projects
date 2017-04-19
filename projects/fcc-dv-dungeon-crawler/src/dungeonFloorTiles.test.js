"use strict";
var t = require('./dungeonFloor.js');
  /* This test should take the map and return floor tiles */
var testData = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
];

const d = t(testData);

console.log(d);
