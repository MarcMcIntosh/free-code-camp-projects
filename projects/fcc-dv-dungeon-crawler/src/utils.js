import addVector from './utility/addVector';
import createMap from './utility/CreateMap';
import emptyCoords from './utility/emptyCoords';
import GameConstants from './utility/GameConstants';

function upDateOccupiedSpaces(obj, x, y, name, arg = { x: 0, y: 0 }) {
  const occupiedSpaces = Object.keys(obj).filter(d => d !== `${x}x${y}`).reduce((a, b) => Object.assign({}, a, { b: obj[b] }));
  return Object.assign({}, occupiedSpaces, {
    [`${x + arg.x}x${y + arg.y}`]: name,
  });
}

export {
  addVector,
  createMap,
  upDateOccupiedSpaces,
  emptyCoords,
  GameConstants,
};
