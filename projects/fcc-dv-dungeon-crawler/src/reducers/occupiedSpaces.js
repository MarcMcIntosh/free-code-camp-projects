/* eslint no-param-reassign: "off" */

import {
  MOVE,
  SET_LOCATION,
  RESET_BOARD,
  ADD_BOSS,
  ADD_ENTITY,
  REMOVE_ENTITY,
} from '../actions/OccupiedSpaces';

import {
  rmOccupiedSpace,
} from '../utils';

import {
  tileData,
  trajectory,
} from '../utility/GameConstants';

export const DEFAULT = { '0x0': 'player' };
// export const DEFAULT = {};
export default function (state, action) {
  switch (action.type) {
    case ADD_ENTITY: {
      const { entityName, entityType, health, attack, tile } = action.payload;
      const { x, y } = action.payload.location;
      const occupiedSpaces = { ...state.occupiedSpaces,
        [`${x}x${y}`]: entityName };
      const entities = {
        ...state.entities,
        [entityName]: {
          entityType,
          health,
          attack,
          x,
          y,
          tile,
        },
      };
      return { ...state, occupiedSpaces, entities };
    }
    case REMOVE_ENTITY: {
      const { entityName } = action.payload;
      const { x, y } = state.entities[entityName];
      const occupiedSpaces = rmOccupiedSpace(state.occupiedSpaces, x, y);
      const entities = Object.keys(state.entities).filter(
        d => d !== entityName,
      ).reduce((a, b) => Object.assign({}, a, {
        [b]: state.entities[b],
      }), {});
      return { ...state, occupiedSpaces, entities };
    }
    case MOVE: {
      const { entityName, vector } = action.payload;
      const ex = state.entities[entityName].x;
      const ey = state.entities[entityName].y;
      // const { next_step } = state.entities[entityName].tile;
      const direction = trajectory(ex, ey, vector.x, vector.y);
      /* Only player moves */
      const curr = state.entities[entityName].tile;
      const str = state.entities[entityName].entityType.toUpperCase();
      const nextStep = (curr.direction !== direction) ? 0 : curr.next_step;
      const tile = tileData[str][direction][nextStep];
      const entities = {
        ...state.entities,
        [entityName]: {
          ...state.entities[entityName],
          x: vector.x,
          y: vector.y,
          tile,
        },
      };
      /* Error with upDateOccupiedSpaces, */
      // const occupiedSpaces = upDateOccupiedSpaces(state.occupiedSpaces, ex, ey, vector);
      const o = rmOccupiedSpace(state.occupiedSpaces, ex, ey);
      const occupiedSpaces = {
        ...o,
        [`${vector.x}x${vector.y}`]: entityName,
      };
      return { ...state, occupiedSpaces, entities };
    }
    case SET_LOCATION: {
      /* There's an error here with placing the player */
      const { entityName, location } = action.payload;
      const { x, y } = location;
      const ex = state.entities[entityName].x;
      const ey = state.entities[entityName].y;
      const entities = {
        ...state.entities,
        [entityName]: { ...state.entities[entityName], x, y },
      };
      const o = rmOccupiedSpace(state.occupiedSpaces, ex, ey);
      const occupiedSpaces = {
        ...o,
        [`${x}x${y}`]: entityName,
      };
      return { ...state, occupiedSpaces, entities };
    }
    case RESET_BOARD: {
      const { x, y } = state.entities.player;
      const entities = { player: state.entities.player };
      const occupiedSpaces = { [`${x}x${y}`]: 'player' };
      return { ...state, entities, occupiedSpaces };
    }
    case ADD_BOSS: {
      const { health, attack, tile } = action.payload;
      const { x, y } = action.payload.location;
      const occupiedSpaces = {
        ...state.occupiedSpaces,
        [`${x}x${y}`]: 'boss',
        [`${x + 1}x${y}`]: 'boss',
        [`${x}x${y + 1}`]: 'boss',
        [`${x + 1}x${y + 1}`]: 'boss',
      };
      const entities = {
        ...state.entities,
        boss: { entityType: 'enemy', health, attack, x, y, tile },
      };
      return { ...state, occupiedSpaces, entities };
    }
    default: return state;
  }
}
