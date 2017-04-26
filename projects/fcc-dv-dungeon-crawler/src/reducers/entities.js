import {
  GAIN_XP,
  DAMAGE,
  HEAL,
  SWITCH_WEAPON,
  LEVEL_UP,
} from '../actions/Entities';
import { tileData, weaponTypes } from '../utility/GameConstants';

export const DEFAULT = {
  player: {
    entityName: 'player',
    entityType: 'player',
    x: 0,
    y: 0,
    health: 100,
    weapon: weaponTypes[0],
    attack: 7,
    level: 0,
    toNextLevel: 60,
    tile: tileData.PLAYER.up[0],
  },
};
// entities exclusive Action Types
export default function (state, action) {
  switch (action.type) {
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
    default: return state;
  }
}
