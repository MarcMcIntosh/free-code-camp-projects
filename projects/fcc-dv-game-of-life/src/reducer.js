import { nextGame, zeroGame, randomGame } from './utils/game';

import {
  RESET_GAME,
  TOGGLE_PLAY,
  SET_SPEED,
  SET_SIZE,
  NEXT_GEN,
  SET_GAME,
  SET_RANDOM,
  UPDATE_GEN,
  TOGGLE_SQUARE,
} from './actions';

const DEFAULT_STATE = {
  width: 16,
  height: 16,
  running: true,
  speed: 1000,
  game: randomGame(16, 16),
  gen: 0,
  timer: -1,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_SIZE: return { ...state, ...action.payload };
    case SET_SPEED: return { ...state, speed: action.payload };
    case SET_RANDOM: return {
      ...state,
      running: false,
      game: randomGame(state.width, state.height),
      gen: 0,
      timer: -1,
    };
    case RESET_GAME: return {
      ...state,
      gen: 0,
      running: false,
      game: zeroGame(state.width, state.height),
    };
    case TOGGLE_PLAY: return {
      ...state,
      running: !state.running,
      timer: action.payload || -1,
    };
    case TOGGLE_SQUARE: {
      const { x, y } = action.payload;
      const game = [...state.game];
      const row = [...game[y]];
      row[x] = row[x] ? 0 : 1;
      // row.splice(x, 1, row[x] ? 0 : 1);
      game.splice(y, 1, row);
      return { ...state, game };
    }
    case NEXT_GEN: return {
      ...state,
      timer: action.payload,
    };
    case UPDATE_GEN: return {
      ...state,
      game: nextGame(state.game),
      gen: state.gen + 1,
    };
    case SET_GAME: return { ...state, game: action.payload };
    default: return state;
  }
}

export default reducer;
