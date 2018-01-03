import generateGame from './GenerateGame';
import { tileData, weaponTypes } from './GameConstants';
import {
  TOGGLE_DARKNESS,
  SET_MAP,
  RESET_MAP,
  WIN,
  LOSE,
  RESET_MESSAGE,
  RESET_LEVEL,
  INCREASE_LEVEL,
  GAIN_XP,
  DAMAGE,
  HEAL,
  SWITCH_WEAPON,
  LEVEL_UP,
  MOVE,
  REMOVE_ENTITY,
  ON_PRESS,
} from './actions';

function rmOccupiedSpace(obj, x, y) {
  return Object.keys(obj).filter(d => d !== `${x}x${y}`).reduce((a, b) => Object.assign({}, a, { [b]: obj[b] }), {});
}

function trajectory(x0, y0, x1, y1) {
  if (y1 > y0) {
    return 'down';
  } else if (y1 < y0) {
    return 'up';
  } else if (x1 > x0) {
    return 'right';
  } else if (x1 < x0) {
    return 'left';
  }
  return 'up';
}

export const DEFAULT_STATE = {
  darkness: true,
  message: '',
  // ...generateGame(),
  map: [],
  level: 1,
  occupiedSpaces: {},
  entities: {},
  dungeon: [],
  ready: false,
  pressing: 0,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ON_PRESS: return { ...state, pressing: action.payload };
    case TOGGLE_DARKNESS: return {
      ...state, darkness: !state.darkness,
    };
    case SET_MAP: return {
      ...state,
      ...generateGame(state.level, state.entities.player),
    };
    case RESET_MAP: return { ...state, ready: true, message: '', ...generateGame() };
    case WIN: return { ...state, message: 'WINNER!' };
    case LOSE: return { ...state, message: 'GAME OVER' };
    case RESET_MESSAGE: return { ...state, message: '' };
    case INCREASE_LEVEL: return { ...state, level: state.level + 1 };
    case RESET_LEVEL: return { ...state, level: 1 };

    case DAMAGE: return {
      ...state,
      entities: {
        ...state.entities,
        [action.entityName]: {
          ...state.entities[action.entityName],
          health: state.entities[action.entityName].health - action.value,
        },
      },
    };
    case HEAL: return {
      ...state,
      entities: {
        ...state.entities,
        [action.entityName]: {
          ...state.entities[action.entityName],
          health: state.entities.player.health + action.value,
        },
      },
    };
    case SWITCH_WEAPON: {
      const weapons = weaponTypes.filter(d => d.entityName === action.weapon);
      return {
        ...state,
        entities: {
          ...state.entities,
          player: {
            ...state.entities.player,
            weapon: weapons[0],
            attack: state.entities.player.attack + action.attack,
          },
        },
      };
    }
    case GAIN_XP: return {
      ...state,
      entities: {
        ...state.entities,
        player: {
          ...state.entities.player,
          toNextLevel: state.entities.player.toNextLevel - action.xp,
        },
      },
    };
    case LEVEL_UP: return {
      ...state,
      entities: {
        ...state.entities,
        player: {
          ...state.entities.player,
          attack: state.entities.player.attack + action.attack,
          health: state.entities.player.health + action.health,
          toNextLevel: action.toNextLevel,
          level: state.entities.player.level + 1,
        },
      },
    };
    case MOVE: {
      const { entityName, vector } = action.payload;
      const ex = state.entities[entityName].x;
      const ey = state.entities[entityName].y;
      const direction = trajectory(ex, ey, vector.x, vector.y);
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
      const o = rmOccupiedSpace(state.occupiedSpaces, ex, ey);
      const occupiedSpaces = {
        ...o,
        [`${vector.x}x${vector.y}`]: entityName,
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
    default: return state;
  }
}
