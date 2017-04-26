// import placeRoom from './PlaceRoom';
import getDoorOffset from './GetDoorOffset';
import findWall from './FindWall';
import dungeonFloor from './dungeonFloor';
import {
  tileType,
  tileData,
  tileAtRandom,
  ENEMY,
  weaponTypes,
} from './GameConstants';

const DEFAULT_PLAYER = {
  entityName: 'player',
  entityType: 'player',
  x: 0,
  y: 0,
  health: 100,
  weapon: weaponTypes[0],
  attack: 7,
  level: 1,
  toNextLevel: 60,
  tile: tileData.PLAYER.up[0],
};

export default function GenerateGame(level = 1, player = DEFAULT_PLAYER, w = 100, h = 100, maxRS = 20, minRS = 6, maxHL = 5, n = 20) {
  // init grid of walls
  const arr = [];
  for (let i = 0; i < w; i += 1) {
    arr[i] = [];
    for (let j = 0; j < h; j += 1) {
      arr[i][j] = tileType.WALL;
    }
  }
  // Place a random floor tile
  const rx = Math.FLOOR(Math.random() * w);
  const ry = Math.FLOOR(Math.random() * w);
  arr[rx][ry] = tileType.FLOOR;
  // create rooms

  function placeRoom() {
    const wall = findWall(arr);
    const roomWidth = Math.floor((Math.random() * (maxRS - minRS)) + minRS);
    const roomHeight = Math.floor((Math.random() * (maxRS - minRS)) + minRS);

    let startX;
    let startY;

    switch (wall.openDir) {
      case 'right':
        startX = wall.coords.x - roomWidth;
        startY = (wall.coords.y - Math.floor(roomHeight / 2)) + getDoorOffset(roomHeight);
        break;
      case 'left':
        startX = wall.coords.x + 1;
        startY = (wall.coords.y - Math.floor(roomHeight / 2)) + getDoorOffset(roomHeight);
        break;
      case 'top':
        startX = (wall.coords.x - Math.floor(roomWidth / 2)) + getDoorOffset(roomWidth);
        startY = wall.coords.y + 1;
        break;
      case 'bottom':
        startX = (wall.coords.x - Math.floor(roomWidth / 2)) + getDoorOffset(roomWidth);
        startY = wall.coords.y - roomHeight;
        break;
      default:
        break;
    }
    // Re-try if room would be outside matrix
    if (startX < 0
      || startY < 0
      || startX + roomWidth >= arr.length
      || startY + roomHeight >= arr[0].length
    ) { return placeRoom(); }

    // Check all spaces are clear
    let numClear = 0;
    for (let ri = startX; ri < startX + roomWidth; ri += 1) {
      if (arr[ri].slice(startY, startY + roomHeight).every(tile => tile === tileType.WALL)) {
        numClear += 1;
      }
    }
    /* Exit is not all spaces are clear */
    if (numClear !== roomWidth) {
      return placeRoom();
    }
    /* Start filling the floor */
    for (let fx = startX; fx < startX + roomWidth; fx += 1) {
      for (let fy = startY; fy < startY + roomHeight; fy += 1) {
        arr[fx][fy] = tileType.FLOOR;
      }
    }
    return undefined;
  }
  for (let i = 0; i < n; i += 1) { placeRoom(); }

  const occupiedSpaces = {};
  const entities = {};

  function getEmptyCoords() {
    let emptyCoords;
    let ex;
    let ey;
    do {
      ex = Math.floor(Math.random() * arr.length);
      ey = Math.floor(Math.random() * arr[ex].length);
      const str = `${ex}x${ey}`;
      const isOccupied = Object.prototype.hasOwnProperty.call(occupiedSpaces, str);
      if (arr[ex][ey] === tileType.FLOOR && !isOccupied) {
        emptyCoords = { x: ex, y: ey };
      }
    } while (!emptyCoords);
    return emptyCoords;
  }

  /* see actions/Map.js for an overview */
  const empties = [].concat(getEmptyCoords());
  while (empties.length < 12) {
    const ec = getEmptyCoords();
    const isUnique = empties.every(d => (d.x !== ec.x && d.y !== ec.y));
    if (isUnique) { empties.push(ec); }
  }

  /* Add health */
  empties.slice(0, 5).forEach((d, i) => {
    const obj = {
      entityName: `health${i}`,
      entityType: 'health',
      health: 20,
      attack: 0,
      x: d.x,
      y: d.y,
      tile: tileData.HEALTH,
    };
    const str = `${obj.x}x${obj.y}`;
    entities[obj.entityName] = obj;
    occupiedSpaces[str] = obj.entityName;
  });
  /* Add enemies */
  empties.slice(5, 10).forEach((d, i) => {
    const obj = {
      entityName: `enemy${i}`,
      entityType: 'enemy',
      health: ENEMY.health * level,
      attack: ENEMY.attack * level,
      x: d.x,
      y: d.y,
      tile: tileAtRandom(tileData.ENEMY),
    };
    const str = `${obj.x}x${obj.y}`;
    entities[obj.entityName] = obj;
    occupiedSpaces[str] = obj.entityName;
  });

  // add weapon
  const wpn = {
    ...weaponTypes[level],
    x: empties[10].x,
    y: empties[10].y,
  };
  entities[wpn.entityName] = wpn;
  occupiedSpaces[`${wpn.x}x${wpn.y}`] = wpn.entityName;

  // add player
  const plyr = { ...player, x: empties[11].x, y: empties[11].y };
  entities[plyr.entityName] = plyr;
  occupiedSpaces[`${plyr.x}x${plyr.y}`] = plyr.entityName;

  function findLargeSpace() {
    const emp0 = getEmptyCoords();
    const emp1 = { x: emp0.x + 1, y: emp0.y };
    const emp2 = { x: emp0.x, y: emp0.y + 1 };
    const emp3 = { x: emp0.x + 1, y: emp0.y + 1 };
    if (emp3.x >= w || emp3.y >= h) {
      return findLargeSpace();
    } else if (
      arr[emp0.x][emp0.y] !== tileType.FLOOR ||
      arr[emp1.x][emp1.y] !== tileType.FLOOR ||
      arr[emp2.x][emp2.y] !== tileType.FLOOR || arr[emp3.x][emp3.y] !== tileType.FLOOR
    ) {
      return findLargeSpace();
    }
    return [].concat(emp0, emp1, emp2, emp3);
  }
  // add exit or boss
  const bigSpace = findLargeSpace();
  if (level < 4) {
    entities.exit = {
      entityName: 'exit',
      entityType: 'exit',
      attack: 0,
      health: 0,
      x: bigSpace[0].x,
      y: bigSpace[0].y,
      tile: tileData.EXIT,
    };
    bigSpace.forEach((d) => {
      const osStr = `${d.x}x${d.x}`;
      occupiedSpaces[osStr] = 'exit';
    });
  } else if (level === 4) {
    entities.boss = {
      entityName: 'boss',
      entityType: 'enemy',
      attack: 125,
      health: 500,
      x: bigSpace[0].x,
      y: bigSpace[0].y,
      tile: tileData.BOSS,
    };
    bigSpace.forEach((d) => {
      const osStr = `${d.x}x${d.x}`;
      occupiedSpaces[osStr] = 'boss';
    });
  }

  return {
    map: arr,
    level,
    occupiedSpaces,
    entities,
    dungeonFloor: dungeonFloor(arr),
  };
}
