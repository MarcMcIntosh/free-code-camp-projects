import resetBoard from './util/reset-board';
import {
  RESET,
  SET_PLAYER,
  TAKE_TURN,
} from './actions';

const DEFAULT_STATE = {
  board: resetBoard(),
  ai: '',
  player: '',
  won: '',
  turn: 'O',
  done: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RESET: return {
      ...state,
      board: resetBoard(),
      ai: '',
      player: '',
      won: '',
      turn: 'O',
    };
    case SET_PLAYER: return {
      ...state,
      player: action.payload,
      ai: (action.payload === 'X') ? 'O' : 'X',
    };
    case TAKE_TURN: return {
      ...state,
      board: action.payload,
      turn: (state.turn === 'X') ? 'O' : 'X',
    };
    default: return state;
  }
}

export default reducer;
