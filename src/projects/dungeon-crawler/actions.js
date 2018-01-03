import { ATTACK_VARIANCE, ENEMY, PLAYER } from './GameConstants';

const prefix = str => (`ROUGE-LIKE_${str}`);
/* To Do */
export const WIN = prefix('WIN');
export const onWin = () => ({ type: WIN });
export const LOSE = prefix('LOSE');
export const onLose = () => ({ type: LOSE });
export const RESET_MESSAGE = prefix('RESET_MESSAGE');
export const onResetMessage = () => ({ type: RESET_MESSAGE });

export const MOVE = prefix('MOVE');
export const move = (entityName, vector) => ({
  type: MOVE,
  payload: { entityName, vector },
});

export const TOGGLE_DARKNESS = prefix('TOGGLE_DARKNESS');
export const toggleDarkness = () => ({ type: TOGGLE_DARKNESS });

export const GAIN_XP = prefix('GAIN_XP');
export const gainXp = xp => ({ type: GAIN_XP, xp });

export const DAMAGE = prefix('DAMAGE');
export const damage = (entityName, value) => ({ type: DAMAGE, entityName, value });

export const ON_PRESS = prefix('ON_PRESS');
export const onPress = (payload = 0) => ({ type: ON_PRESS, payload });

export const HEAL = prefix('HEAL');
export const heal = (entityName, value) => ({
  type: HEAL, entityName, value });

export const SWITCH_WEAPON = prefix('SWITCH_WEAPON');
export const switchWeapon = (weapon, attack) => ({
  type: SWITCH_WEAPON, weapon, attack });

export const LEVEL_UP = prefix('LEVEL_UP');
export const levelUp = (attack, health, toNextLevel) => ({
  type: LEVEL_UP, attack, health, toNextLevel });

export const RESET_LEVEL = prefix('RESET_LEVEL');
export const resetLevel = () => ({ type: RESET_LEVEL });

export const INCREASE_LEVEL = prefix('INCREASE_LEVEL');
export const increaseLevel = () => ({ type: INCREASE_LEVEL });

export const RESET_MAP = prefix('RESET_MAP');
export const resetMap = () => ({ type: RESET_MAP });

export const SET_MAP = prefix('SET_MAP');
export const setMap = () => ({ type: SET_MAP });

export const REMOVE_ENTITY = prefix('REMOVE_ENTITY');
export const removeEntity = entityName => ({
  type: REMOVE_ENTITY, payload: { entityName } });

/* Main Movement controller */

export const exitStage = () => (dispatch) => {
  dispatch(increaseLevel());
  dispatch(setMap());
};

export const pickUpItem = ({ entityType, entityName, vector, ...entity }) => (dispatch) => {
  if (entityType === 'health') {
    dispatch(heal('player', entity.health));
  } else if (entityType === 'weapon') {
    dispatch(switchWeapon(entityName, entity.attack));
  }
  dispatch(removeEntity(entityName));
  return dispatch(move('player', vector));
};

/* do battle */
export const battle = ({
  player,
  entity: { entityName, entityType, ...entity },
}) => (dispatch) => {
  /* attack powers */
  const p = Math.floor((Math.random() * ATTACK_VARIANCE) + (player.attack - ATTACK_VARIANCE));
  const e = Math.floor((Math.random() * ATTACK_VARIANCE) + (entity.attack - ATTACK_VARIANCE));

  /* players response to attack */
  if (player.health <= e) { dispatch(onLose()); } else if (player.health > e) { dispatch(damage('player', e)); }

  /* enemy response to attck */
  const xp = (player.level + 1) * ENEMY.xp;
  if (entity.health > p) {
    return dispatch(damage(entityName, p));
  } else if (entityType === 'boss') {
    return dispatch(onWin());
  } else if (xp < player.toNextLevel) {
    dispatch(gainXp(xp));
  } else if (xp >= player.toNextLevel) {
    const excess = xp - player.toNextLevel;
    const attack = (player.level + 1) * PLAYER.attack;
    const health = (player.level + 1) * PLAYER.health;
    const toNext = ((player.level + 2) * PLAYER.toNextLevel) - excess;
    dispatch(levelUp(attack, health, toNext));
  }

  return dispatch(removeEntity(entityName));
};
