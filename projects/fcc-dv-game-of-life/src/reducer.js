import { zeroGame, randomGame } from './utils/game';

import {
  RESET_GAME,
  TOGGLE_PLAY,
  SET_SPEED,
  SET_SIZE,
  NEXT_GEN,
  SET_GAME,
} from './actions';

const DEFAULT_STATE = {
  width: 16,
  height: 16,
  running: true,
  speed: 1000,
  game: randomGame(16, 16),
  gen: 0,
  timer: null,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_SIZE: return { ...state, ...action.payload };
    case SET_SPEED: return { ...state, speed: action.payload };
    case RESET_GAME: return {
      ...state,
      gen: 0,
      running: false,
      game: zeroGame(state.height, state.width),
    };
    case TOGGLE_PLAY: return {
      ...state,
      running: !state.running,
      timer: action.payload || null,
    };
    case NEXT_GEN: return { ...state, ...action.payload };
    case SET_GAME: return { ...state, ...action.payload };
    default: return state;
  }
}

export default reducer;
