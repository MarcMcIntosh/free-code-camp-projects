import { addVector } from '../utils';
import { tileType, ATTACK_VARIANCE, ENEMY } from '../utility/GameConstants';
import { onWin, onLose } from './Message';
import { setMap, fillMap } from './Map';
import { increaseLevel } from './Level';
import { move, removeEntity, resetBoard } from './OccupiedSpaces';
import { damage, gainXp, heal, switchWeapon } from './Entities';

export default function onMove(vector) {
  return (dispatch, getState) => {
    const { occupiedSpaces, map, entities, level } = getState();
    const v = addVector({
      x: entities.player.x,
      y: entities.player.y,
    }, vector);
    const entityName = occupiedSpaces[`${v.x}x${v.y}`];
    if (map[v.x][v.y] === tileType.FLOOR && !entityName) {
      return dispatch(move('player', v));
    } else if (
    //  map[v.x] === undefined
    //  || map[v.x][v.y] === undefined
      map[v.x][v.y] !== tileType.FLOOR
    ) {
      return dispatch(move('player', {
        x: entities.player.x,
        y: entities.player.y,
      }));
    }
    const entity = entities[entityName];
    switch (entity.entityType) {
      case 'weapon': {
        dispatch(switchWeapon(entityName, entity.attack));
        return dispatch(move('player', v));
      }
      case 'health': {
        dispatch(heal('player', entity.health));
        dispatch(removeEntity(entityName));
        return dispatch(move('player', v));
      }
      case 'exit': {
        dispatch(resetBoard());
        dispatch(setMap());
        dispatch(increaseLevel());
        return dispatch(fillMap());
      }
      case 'boss':
      case 'enemy': {
        const a = ATTACK_VARIANCE;
        const p = Math.floor((Math.random() * a) + (entities.player.attack - a));
        const e = Math.floor((Math.random() * a) + (entity.attack - a));
        if (entity.health > a && entities.player.health < e) {
          return dispatch(onLose());
        } else if (entity.health > a &&
        entities.player.health > e) {
          dispatch(damage(entityName, p));
          return dispatch(damage('player', e));
        } else if (entityName === 'boss') {
          return dispatch(onWin());
        }
        dispatch(gainXp((level + 1) * ENEMY.xp));
        return dispatch(removeEntity(entityName));
      }
      default: return dispatch(move('player', {
        x: entities.player.x,
        y: entities.player.y,
      }));
    }
  };
}
