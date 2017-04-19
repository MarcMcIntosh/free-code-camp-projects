import { tileType } from './GameConstants';

const tileData = {
  FLOOR: [
    { type: 'FLOOR', sx: 0, sy: 0, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 32, sy: 0, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 64, sy: 0, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 96, sy: 0, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 0, sy: 32, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 32, sy: 32, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 64, sy: 32, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 96, sy: 32, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 0, sy: 64, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 32, sy: 64, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 64, sy: 64, sw: 32, sh: 32 },
    { type: 'FLOOR', sx: 96, sy: 64, sw: 32, sh: 32 },
  ],
  WALL: [
    { type: 'WALL', sx: 0, sy: 96, sw: 32, sh: 32 },
    { type: 'WALL', sx: 32, sy: 96, sw: 32, sh: 32 },
    { type: 'WALL', sx: 64, sy: 96, sw: 32, sh: 32 },
    { type: 'WALL', sx: 96, sy: 96, sw: 32, sh: 32 },
    { type: 'WALL', sx: 0, sy: 128, sw: 32, sh: 32 },
    { type: 'WALL', sx: 32, sy: 128, sw: 32, sh: 32 },
    { type: 'WALL', sx: 64, sy: 128, sw: 32, sh: 32 },
    { type: 'WALL', sx: 96, sy: 128, sw: 32, sh: 32 },
    { type: 'WALL', sx: 0, sy: 160, sw: 32, sh: 32 },
    { type: 'WALL', sx: 32, sy: 160, sw: 32, sh: 32 },
    { type: 'WALL', sx: 64, sy: 160, sw: 32, sh: 32 },
    { type: 'WALL', sx: 96, sy: 160, sw: 32, sh: 32 },
  ],
  DARK: [
    { type: 'DARK', sx: 0, sy: 192, sw: 32, sh: 32 },
  ],
};

function tileAtRandom(arr) {
  const n = Math.floor(Math.random() * arr.length);
  return arr[n];
}
/* Takes a 2d array from createMap */
function dungeonFloor(arr) {
  const data = [];
  // console.log(arr[99]);
  for (let x = 0; x < arr.length; x += 1) {
    data[x] = [];
    for (let y = 0; y < arr[x].length; y += 1) {
      // console.log(`current iteration: ${x} : ${y}`);
      const xmax = arr.length - 1;
      const ymax = arr[x].length - 1;

      if (arr[x][y] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.FLOOR);
      } else if (x > 0 && arr[x - 1][y] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (x > 0 && y > 0 && arr[x - 1][y - 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (x > 0 && y < ymax && arr[x - 1][y + 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (y > 0 && arr[x][y - 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (y < ymax && arr[x][y + 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (x < xmax && arr[x + 1][y] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (x < xmax && y > 0 && arr[x + 1][y - 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else if (x < xmax && y < ymax && arr[x + 1][y + 1] === tileType.FLOOR) {
        data[x][y] = tileAtRandom(tileData.WALL);
      } else {
        data[x][y] = tileAtRandom(tileData.DARK);
      }
    }
  }
  return data;
}

export default dungeonFloor;
