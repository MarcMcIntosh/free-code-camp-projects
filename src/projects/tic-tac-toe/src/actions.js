import minimax from './util/minimax';
import checkWinner from './util/check-winner';
import isFull from './util/is-full';
import getOpponent from './util/get-opponent';

const prefix = str => `TIC-TAC-TOE_${str}`;

export const RESET_GAME = prefix('RESET_GAME');
const resetGame = () => ({ type: RESET_GAME });
export const SET_PLAYER = prefix('SELECT_MARK');
const setPlayer = payload => ({
  type: SET_PLAYER, payload,
});

export const CHECK_BOARD = prefix('CHECK_BOARD');
const checkBoard = payload => ({
  type: CHECK_BOARD, payload,
});

export const TAKE_TURN = prefix('TAKE_TURN');
const takeTurn = (payload) => {
  const { board } = payload;
  const turn = getOpponent(payload.turn);
  return { type: TAKE_TURN, turn, board };
};

export function onSelectPlayer(player) {
  return dispatch => dispatch(setPlayer(player));
}

export function onResetGame() {
  return (dispatch, getState) => {
    clearTimeout(getState().timer_id);
    dispatch(resetGame());
  };
}

export function onAiMove(arr, ai) {
  return (dispatch, getState) => {
    const dif = getState().difficulty;
    const board = arr.slice();
    const move = minimax(board, ai, 0, ai, dif);
    board[move] = ai;
    dispatch(takeTurn({ board, turn: ai }));
  };
}

export function onTakeTurn(board, player) {
  return dispatch => dispatch(takeTurn({ board, turn: player }));
}

export function onCheckBoard(arr) {
  const winner = checkWinner(arr);
  const done = (winner) ? true : isFull(arr);
  return (dispatch) => {
    const t = (done) ? setTimeout(() => dispatch(resetGame()), 3000) : null;
    dispatch(checkBoard({
      winner,
      done,
      timer_id: t,
    }));
  };
}
