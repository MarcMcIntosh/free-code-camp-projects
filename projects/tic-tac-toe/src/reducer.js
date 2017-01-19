import resetBoard from './util/reset-board';
import {
  RESET_GAME,
  SET_PLAYER,
  TAKE_TURN,
} from './actions';

const DEFAULT_STATE = {
  board: resetBoard(),
  ai: null,
  player: null,
  winner: null,
  turn: null,
  rounds: 0,
  done: false,
  init: true,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RESET_GAME: return {
      ...state,
      board: resetBoard(),
      ai: null,
      player: null,
      winner: null,
      turn: null,
      rounds: 0,
      done: false,
      init: true,
    };
    case SET_PLAYER: return {
      ...state,
      player: action.payload,
      ai: !action.payload,
      turn: true,
      init: false,
    };
    case TAKE_TURN: return {
      ...state,
      board: action.payload,
      turn: !state.turn,
    };
    default: return state;
  }
}

export default reducer;
