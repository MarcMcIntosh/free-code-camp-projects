import {
  emptyCoords,
  GameConstants,
} from '../utils';
import {
  setLocation,
  addEntity,
  addBoss,
} from './OccupiedSpaces';

export const RESET_MAP = 'RESET_MAP';
export function resetMap() {
  return { type: RESET_MAP };
}

export const SET_MAP = 'SET_MAP';
export function setMap() {
  return { type: SET_MAP };
}

export function fillMap() {
  return (dispatch, getState) => {
    const { map, occupiedSpaces, level } = getState();
    // const entities = { player };

    // An array of unique empty places //
    const weapon = GameConstants.weaponTypes[level];
    const l = level + 1;
    const e = new Set();

    while (e.size < 13) { e.add(emptyCoords(map, occupiedSpaces)); }

    const empties = Array.from(e);

    empties.slice(0, 5).forEach((d, i) => {
      dispatch(addEntity(`health${i}`, 'health', 20, 0, d));
    });

    empties.slice(5, 10).forEach((d, i) => {
      dispatch(addEntity(`enemy${i}`, 'enemy', l * GameConstants.ENEMY.health, l * GameConstants.ENEMY.attack));
    });
    dispatch(addEntity(weapon.entityName, 'weapon', weapon.health, weapon.attack, empties[10]));
    dispatch(setLocation('player', empties[11]));
    if (level < 4) {
      dispatch(addEntity('exit', 'exit', 0, 0, empties[12]));
    } else if (level === 4) {
      dispatch(addBoss(125, 500, empties[12]));
    }
  };
}
