import { tileType, tileData } from './GameConstants';

export function addVector(coords, vector) {
  return { x: coords.x + vector.x, y: coords.y + vector.y };
}

export function extentOf(game, dim, pos) {
  const m = Math.max(Math.floor(pos - (dim / 2)), 0);
  const e = Math.min(m + dim, game);
  const s = (m + dim > game) ? (game - dim) : m;
  return [s, e];
}

export function tileAtRandom(arr) {
  const n = Math.floor(Math.random() * arr.length);
  return arr[n];
}

export function rmOccupiedSpace(obj, x, y) {
  return Object.keys(obj).filter(d => d !== `${x}x${y}`).reduce((a, b) => Object.assign({}, a, { [b]: obj[b] }), {});
}

export function trajectory(x0, y0, x1, y1) {
  if (y1 > y0) {
    return 'down';
  } else if (y1 < y0) {
    return 'up';
  } else if (x1 > x0) {
    return 'right';
  } else if (x1 < x0) {
    return 'left';
  }
  return 'up';
}

export function getDoorOffset(length) {
  return Math.floor((Math.random() * length) - Math.floor((length - 1) / 2));
}

// Takes a map matrix and a coordinate object
// Returns false if not a wall, otherwise the direction of the open tile
export function isWall(arr, coords) {
  // return false if tile isn't wall
  if (arr[coords.x][coords.y] !== tileType.WALL) {
    return false;
  }
  // left is open
  if (typeof arr[coords.x - 1] !== 'undefined' && arr[coords.x - 1][coords.y] === tileType.FLOOR) {
    return 'left';
  }
  // right is open
  if (typeof arr[coords.x + 1] !== 'undefined' && arr[coords.x + 1][coords.y] === tileType.FLOOR) {
    return 'right';
  }
  // top is open
  if (arr[coords.x][coords.y - 1] === tileType.FLOOR) {
    return 'top';
  }
  // bottom is open
  if (arr[coords.x][coords.y + 1] === tileType.FLOOR) {
    return 'bottom';
  }

  return false;
}

export function findWall(arr) {
  const coords = { x: 0, y: 0 };
  let openDir = false;
  do {
    coords.x = Math.floor(Math.random() * arr.length);
    coords.y = Math.floor(Math.random() * arr[coords.x].length);
    openDir = isWall(arr, coords);
  } while (!openDir);

  return { coords, openDir };
}

export function dungeonFloor(arr) {
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
