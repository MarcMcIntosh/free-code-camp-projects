import {
  emptyCoords,
} from '../utils';
import { weaponTypes, ENEMY } from '../utility/GameConstants';
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
    const weapon = weaponTypes[level];
    const l = level + 1;
    const e = new Set();

    while (e.size < 14) { e.add(emptyCoords(map, occupiedSpaces)); }

    const empties = Array.from(e);

    empties.slice(0, 5).forEach((d, i) => {
      dispatch(addEntity(`health${i}`, 'health', 20, 0, d));
    });

    empties.slice(5, 10).forEach((d, i) => {
      dispatch(addEntity(`enemy${i}`, 'enemy', l * ENEMY.health, l * ENEMY.attack, d));
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
