import {
  MOVE,
  SET_LOCATION,
  RESET_BOARD,
  ADD_BOSS,
  ADD_ENTITY,
  REMOVE_ENTITY,
} from '../actions/OccupiedSpaces';

import {
  upDateOccupiedSpaces,
  rmOccupiedSpace,
} from '../utils';

export const DEFAULT = { '0x0': 'player' };

export default function (state, action) {
  switch (action.type) {
    case ADD_ENTITY: {
      const { entityName, entityType, health, attack } = action.payload;
      const { x, y } = action.payload.location;
      const occupiedSpaces = { ...state.occupiedSpaces,
        [`${x}x${y}`]: entityName };
      const entities = { ...state.entities, [entityName]: { entityType, health, attack, x, y } };
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
      const entities = {
        ...state.entities,
        [entityName]: {
          ...state.entities[entityName],
          x: ex + vector.x,
          y: ey + vector.y,
        },
      };
      const occupiedSpaces = upDateOccupiedSpaces(state.occupiedSpaces, ex, ey, vector);
      return { ...state, occupiedSpaces, entities };
    }
    case SET_LOCATION: {
      const { entityName, location } = action.payload;
      const { x, y } = location;
      const ex = state.entities[entityName].x;
      const ey = state.entities[entityName].y;
      const entities = {
        ...state.entities,
        [entityName]: { ...state.entities[entityName], x, y },
      };
      const occupiedSpaces = Object.assign({}, rmOccupiedSpace(state.occupiedSpaces, ex, ey), {
        [`${x}x${y}`]: entityName,
      });
      return { ...state, occupiedSpaces, entities };
    }
    case RESET_BOARD: {
      const { x, y } = state.entities.player;
      const entities = { player: state.entities.player };
      const occupiedSpaces = { [`${x}x${y}`]: 'player' };
      return { ...state, entities, occupiedSpaces };
    }
    case ADD_BOSS: {
      const { health, attack } = action.payload;
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
        boss: { entityType: 'enemy', health, attack, x, y },
      };
      return { ...state, occupiedSpaces, entities };
    }
    default: return state;
  }
}
