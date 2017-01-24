import Constants from './Constants';
import getOpponent from './util/get-opponent';
import {
  RESET_GAME,
  SET_PLAYER,
  TAKE_TURN,
  CHECK_BOARD,
} from './actions';

const { _, O } = Constants.PLAYER;

function getInitialState(dif = 3) {
  return {
    board: [...Array(9)].map(() => _),
    ai: Constants.PLAYER._,
    player: Constants.PLAYER._,
    winner: null,
    done: false,
    turn: null,
    init: true,
    difficulty: dif,
  };
}

function reducer(state = getInitialState(), action) {
  switch (action.type) {
    /* Automatic difficulty scaling */
    case RESET_GAME: {
      if (state.winner === state.player) {
        return getInitialState(state.difficulty + 1);
      }
      return getInitialState(state.difficulty - 1);
    }

    case SET_PLAYER: return {
      ...state,
      player: action.payload,
      ai: getOpponent(action.payload),
      turn: O,
      init: false,
    };

    case TAKE_TURN: {
      const { turn, board } = action;
      return { ...state, turn, board };
    }

    case CHECK_BOARD: return {
      ...state,
      done: action.payload.done,
      winner: action.payload.winner,
    };

    default: return state;
  }
}

export default reducer;
