import Constants from './Constants';
import checkWinner from './util/check-winner';
import isFull from './util/is-full';
import getOpponent from './util/get-opponent';

import { RESET_GAME, SET_PLAYER, TAKE_TURN } from './actions';

const { _, O } = Constants.PLAYER;

function getInitialState(dif = 6) {
  return {
    board: Array.from({ length: 9 }, () => _),
    ai: _,
    player: _,
    winner: _,
    done: false,
    turn: _,
    init: true,
    difficulty: dif,
    timerId: -1,
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

    case SET_PLAYER: {
      const ai = getOpponent(state.turn);
      return {
        ...state,
        player: action.payload,
        ai,
        turn: O,
        init: false,
      };
    }
    case TAKE_TURN: {
      const board = state.board.slice();
      board[action.payload] = state.turn;
      const winner = checkWinner(board);
      const done = (winner) ? true : isFull(board);
      const turn = getOpponent(state.turn);
      return { ...state, turn, board, winner, done };
    }
    default: return state;
  }
}

export default reducer;
