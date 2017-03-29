export const ATTACK_VARIANCE = 7;
export const tileType = {
  WALL: 0,
  FLOOR: 1,
};
export const SIGHT = 9;
export const tileSize = 12;
export const tileColors = {
  player: 'blue',
  FLOOR: 'white',
  WALL: 'gray',
  enemy: 'red',
  health: 'green',
  weapon: 'orange',
  exit: 'yellow',
  dark: 'black',
};

export const reverseLookup = ['WALL', 'FLOOR'];
export const PLAYER = {
  baseHealth: 100,
  health: 20,
  attack: 12,
  toNextLevel: 60,
};
export const ENEMY = {
  health: 20,
  attack: 12,
  xp: 10,
};
export const weaponTypes = [{
  entityName: 'brass knuckles',
  entityType: 'weapon',
  health: 0,
  attack: 7,
}, {
  entityName: 'serrated dagger',
  entityType: 'weapon',
  health: 0,
  attack: 12,
}, {
  entityName: 'katana',
  entityType: 'weapon',
  health: 0,
  attack: 16,
}, {
  entityName: 'reaper\'s scythe',
  entityType: 'weapon',
  health: 0,
  attack: 22,
}, {
  entityName: 'large trout',
  entityType: 'weapon',
  health: 0,
  attack: 30,
}];
