import {
  SET_MAP,
  RESET_MAP,
} from '../actions/Map';
// import { createMap } from '../utils';
// import dungeonFloor from '../utility/dungeonFloor';

import generateGame from '../utility/GenerateGame';

export default function (state, action) {
  switch (action.type) {
    case SET_MAP: {
      return {
        ...state,
        ...generateGame(state.level, state.entities.player),
      };
    }
    case RESET_MAP: return {
      ...state,
      ...generateGame(),
    };
    default: return state;
  }
}
