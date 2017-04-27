export const ATTACK_VARIANCE = 7;
export const tileType = {
  WALL: 0,
  FLOOR: 1,
};
export const SIGHT = 7;
export const tileSize = 24;
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

export const tileData = {
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
  HEALTH: {
    type: 'HEALTH', sx: 32, sy: 192, sw: 32, sh: 32,
  },
  EXIT: {
    type: 'EXIT', sx: 64, sy: 192, sw: 32, sh: 32,
  },
  BOSS: {
    type: 'BOSS', sx: 96, sy: 192, sw: 32, sh: 32,
  },
  ENEMY: [
    { type: 'ENEMY', sx: 0, sy: 224, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 32, sy: 224, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 64, sy: 224, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 96, sy: 224, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 0, sy: 256, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 32, sy: 256, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 64, sy: 256, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 96, sy: 256, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 0, sy: 288, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 32, sy: 288, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 64, sy: 288, sw: 32, sh: 32 },
    { type: 'ENEMY', sx: 96, sy: 288, sw: 32, sh: 32 },
  ],
  PLAYER: {
    up: [
      { direction: 'up', next_step: 1, sx: 0, sy: 320, sw: 32, sh: 32 },
      { direction: 'up', next_step: 2, sx: 32, sy: 320, sw: 32, sh: 32 },
      { direction: 'up', next_step: 3, sx: 64, sy: 320, sw: 32, sh: 32 },
      { direction: 'up', next_step: 0, sx: 96, sy: 320, sw: 32, sh: 32 },
    ],
    down: [
      { direction: 'down', next_step: 1, sx: 0, sy: 352, sw: 32, sh: 32 },
      { direction: 'down', next_step: 2, sx: 32, sy: 352, sw: 32, sh: 32 },
      { direction: 'down', next_step: 3, sx: 64, sy: 352, sw: 32, sh: 32 },
      { direction: 'down', next_step: 0, sx: 96, sy: 352, sw: 32, sh: 32 },
    ],
    left: [
      { direction: 'left', next_step: 1, sx: 0, sy: 384, sw: 32, sh: 32 },
      { direction: 'left', next_step: 2, sx: 32, sy: 384, sw: 32, sh: 32 },
      { direction: 'left', next_step: 3, sx: 64, sy: 384, sw: 32, sh: 32 },
      { direction: 'left', next_step: 0, sx: 96, sy: 384, sw: 32, sh: 32 },
    ],
    right: [
      { direction: 'right', next_step: 1, sx: 0, sy: 416, sw: 32, sh: 32 },
      { direction: 'right', next_step: 2, sx: 32, sy: 416, sw: 32, sh: 32 },
      { direction: 'right', next_step: 3, sx: 64, sy: 416, sw: 32, sh: 32 },
      { direction: 'right', next_step: 0, sx: 96, sy: 416, sw: 32, sh: 32 },
    ],
  },
  WEAPON: {
    stick: { sx: 0, sy: 448, sw: 32, sh: 32 },
    knife: { sx: 32, sy: 448, sw: 32, sh: 32 },
    axe: { sx: 64, sy: 448, sw: 32, sh: 32 },
    katana: { sx: 96, sy: 448, sw: 32, sh: 32 },
    scythe: { sx: 0, sy: 480, sw: 32, sh: 32 },
  },
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
  entityName: 'stick',
  entityType: 'weapon',
  tile: tileData.WEAPON.stick,
  health: 0,
  attack: 7,
}, {
  entityName: 'knife',
  entityType: 'weapon',
  tile: tileData.WEAPON.knife,
  health: 0,
  attack: 12,
}, {
  entityName: 'axe',
  entityType: 'weapon',
  tile: tileData.WEAPON.axe,
  health: 0,
  attack: 16,
}, {
  entityName: 'katana',
  entityType: 'weapon',
  tile: tileData.WEAPON.katana,
  health: 0,
  attack: 22,
}, {
  entityName: 'scythe',
  entityType: 'weapon',
  tile: tileData.WEAPON.scythe,
  health: 0,
  attack: 30,
}];
