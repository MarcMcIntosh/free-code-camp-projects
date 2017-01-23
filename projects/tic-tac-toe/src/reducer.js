import Constants from './Constants';
import getOpponent from './util/get-opponent';
import {
  RESET_GAME,
  SET_PLAYER,
  TAKE_TURN,
  GAME_OVER,
} from './actions';

function getInitialState() {
  return {
    board: [...Array(9)].map(() => Constants.PLAYER._),
    ai: Constants.PLAYER._,
    player: Constants.PLAYER._,
    winner: null,
    done: false,
    turn: null,
    init: true,
  };
}

function reducer(state = getInitialState(), action) {
  switch (action.type) {

    case RESET_GAME: return getInitialState();

    case SET_PLAYER: return {
      ...state,
      player: action.payload,
      ai: getOpponent(action.payload),
      turn: Constants.PLAYER.O,
      init: false,
    };

    case TAKE_TURN: {
      const { turn, winner, done, board } = action;
      return { ...state, turn, winner, done, board };
    }

    case GAME_OVER: return {
      ...state,
      done: true,
      winner: action.payload,
    };

    default: return state;
  }
}

export default reducer;
