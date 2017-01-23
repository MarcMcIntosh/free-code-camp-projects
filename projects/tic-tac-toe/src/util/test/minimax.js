const mm = require('../minimax');
const boards = require('./boards');
const Constants = require('../../Constants');

const { O } = Constants.PLAYER;
Object.keys(boards).forEach((d) => {
  const move = mm(boards[d], O);
  console.log(`BoardName: ${d}`);
  console.log(`Board: ${boards[d]}`);
  console.log(`MiniMax: ${move}`);
  const arr = boards[d];
  arr[move] = O;
  console.log(`Move:${arr}`);
});
