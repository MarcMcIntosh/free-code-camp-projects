const ATTACK_VARIANCE = 7;
const tileType = {
  WALL: 0,
  FLOOR: 1,
};
const reverseLookup = ['WALL', 'FLOOR'];
const PLAYER = {
  baseHealth: 100,
  health: 20,
  attack: 12,
  toNextLevel: 60,
};
const ENEMY = {
  health: 20,
  attack: 12,
  xp: 10,
};
const weaponTypes = [{
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

module.exports = {
  ATTACK_VARIANCE,
  tileType,
  reverseLookup,
  PLAYER,
  ENEMY,
  weaponTypes,
};
