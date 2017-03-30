// import _ from 'lodash';
import createGrid from './createGrid';
import { tileType } from './GameConstants';
import fillRect from './FillRect';
import placeRoom from './PlaceRoom';

export default function createMap(w = 100, h = 100, maxRS = 20, minRS = 6, maxHL = 5, n = 20) {
  // init grid of walls
  const grid = createGrid(w, h, tileType.WALL);
  let map = fillRect(grid, 45, 45, 10, 10, tileType.FLOOR);
  // create rooms
  for (let i = 0; i < n; i += 1) {
    map = placeRoom(map, maxRS, minRS);
  }
  return map;
}
