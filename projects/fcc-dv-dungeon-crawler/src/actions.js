import { addVector } from './utils';
import { tileType, ATTACK_VARIANCE, ENEMY, PLAYER } from './GameConstants';

/* To Do */
export const WIN = 'WIN';
export const onWin = () => ({ type: WIN });
export const LOSE = 'LOSE';
export const onLose = () => ({ type: LOSE });
export const RESET_MESSAGE = 'RESET_MESSAGE';
export const onResetMessage = () => ({ type: RESET_MESSAGE });

export const MOVE = 'MOVE';
export const move = (entityName, vector) => ({
  type: MOVE,
  payload: { entityName, vector },
});

export const TOGGLE_DARKNESS = 'TOGGLE_DARKNESS';
export const toggleDarkness = () => ({ type: TOGGLE_DARKNESS });

export const GAIN_XP = 'GAIN_XP';
export const gainXp = xp => ({ type: GAIN_XP, xp });

export const DAMAGE = 'DAMAGE';
export const damage = (entityName, value) => ({ type: DAMAGE, entityName, value });

export const HEAL = 'HEAL';
export const heal = (entityName, value) => ({
  type: HEAL, entityName, value });

export const SWITCH_WEAPON = 'SWITCH_WEAPON';
export const switchWeapon = (weapon, attack) => ({
  type: SWITCH_WEAPON, weapon, attack });

export const LEVEL_UP = 'LEVEL_UP';
export const levelUp = (attack, health, toNextLevel) => ({
  type: LEVEL_UP, attack, health, toNextLevel });

export const RESET_LEVEL = 'RESET_LEVEL';
export const resetLevel = () => ({ type: RESET_LEVEL });

export const INCREASE_LEVEL = 'INCREASE_LEVEL';
export const increaseLevel = () => ({ type: INCREASE_LEVEL });

export const RESET_MAP = 'RESET_MAP';
export const resetMap = () => ({ type: RESET_MAP });

export const SET_MAP = 'SET_MAP';
export const setMap = () => ({ type: SET_MAP });

export const REMOVE_ENTITY = 'REMOVE_ENTITY';
export const removeEntity = entityName => ({
  type: REMOVE_ENTITY, payload: { entityName } });

/* Main Movement controller */

export const onMove = vector => (dispatch, getState) => {
  /* This could be reducer logic */
  const {
    occupiedSpaces,
    map,
    entities,
    level,
  } = getState();

  const v = addVector({ x: entities.player.x, y: entities.player.y }, vector);

  const entityName = occupiedSpaces[`${v.x}x${v.y}`];
  if (map[v.x][v.y] === tileType.FLOOR && !entityName) {
    return dispatch(move('player', v));
  } else if (map[v.x][v.y] !== tileType.FLOOR) {
    return dispatch(move('player', { x: entities.player.x, y: entities.player.y }));
  }

  const entity = entities[entityName];
  switch (entity.entityType) {
    case 'weapon': {
      dispatch(switchWeapon(entityName, entity.attack));
      dispatch(removeEntity(entityName));
      return dispatch(move('player', v));
    }
    case 'health': {
      dispatch(heal('player', entity.health));
      dispatch(removeEntity(entityName));
      return dispatch(move('player', v));
    }
    case 'exit': {
      dispatch(increaseLevel());
      return dispatch(setMap());
    }
    // console.log('Bosses share entites, all off which need to be damaged');
    case 'boss':
    case 'enemy': {
      const a = ATTACK_VARIANCE;
      const p = Math.floor((Math.random() * a) + (entities.player.attack - a));
      const e = Math.floor((Math.random() * a) + (entity.attack - a));
      if (entity.health > a && entities.player.health < e) {
        return dispatch(onLose());
      } else if (entity.health > a && entities.player.health > e) {
        dispatch(damage(entityName, p));
        return dispatch(damage('player', e));
      } else if (entityName === 'boss') {
        return dispatch(onWin());
      }
      const xp = (level + 1) * ENEMY.xp;
      if (xp >= entities.player.toNextLevel) {
        const attack = (level + 1) * PLAYER.attack;
        const health = (level + 1) * PLAYER.health;
        const toNext = ((level + 2) * PLAYER.toNextLevel) + (entities.player.toNextLevel - xp);
        dispatch(levelUp(attack, health, toNext));
      } else {
        dispatch(gainXp(xp));
      }
      return dispatch(removeEntity(entityName));
    }
    default: return dispatch(move('player', {
      x: entities.player.x,
      y: entities.player.y,
    }));
  }
};
