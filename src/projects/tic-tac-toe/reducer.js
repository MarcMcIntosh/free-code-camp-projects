import Constants from './Constants';
import getOpponent from './util/get-opponent';
import {
  RESET_GAME,
  SET_PLAYER,
  TAKE_TURN,
  CHECK_BOARD,
} from './actions';

const { _, O } = Constants.PLAYER;

function getInitialState(dif = 6) {
  return {
    board: [...Array(9)].map(() => _),
    ai: Constants.PLAYER._,
    player: Constants.PLAYER._,
    winner: null,
    done: false,
    turn: null,
    init: true,
    difficulty: dif,
    timer_id: null,
  };
}

function reducer(state = getInitialState(), action) {
  switch (action.type) {
    /* Automatic difficulty scaling */
    case RESET_GAME: {
      if (state.winner === state.ai) {
        // Get easyeir when ai wins
        return getInitialState(state.difficulty - 2);
      } else if (state.winner === state.player) {
        // Harder if player win
        return getInitialState(state.difficulty + 3);
      }
      // Just harder on a draw
      return getInitialState(state.difficulty + 1);
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
      timer_id: action.payload.timer_id,
    };

    default: return state;
  }
}

export default reducer;
