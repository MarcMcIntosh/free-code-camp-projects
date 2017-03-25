import { tileType } from './GameConstants';

export default function emptyCoords(game, occupiedSpaces) {
  let coords;
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * game.length);
    y = Math.floor(Math.random() * game[x].length);
    if (game[x][y] === tileType.FLOOR && !occupiedSpaces[`${x}x${y}`]) {
      coords = { x, y };
    }
  } while (!coords);
  return coords;
}
