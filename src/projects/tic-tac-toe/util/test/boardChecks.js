const tests = require('./boards');
const checkWinner = require('../check-winner');

Object.keys(tests).forEach((d) => {
  console.log(`Testing ${d}: ${checkWinner(tests[d])}`);
});
