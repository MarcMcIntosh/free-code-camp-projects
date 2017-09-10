const freeSpaces = require('../free-spaces');
const tests = require('./boards');

Object.keys(tests).forEach((d) => {
  console.log(`
    Board: ${d},
    ${tests[d]}
    Free Spaces: ${freeSpaces(tests[d])}
    `);
});
