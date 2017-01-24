import minimax from './util/minimax';
import checkWinner from './util/check-winner';
import isFull from './util/is-full';
import getOpponent from './util/get-opponent';

export const RESET_GAME = 'RESET_GAME';
const resetGame = () => ({ type: RESET_GAME });
export const SET_PLAYER = 'SELECT_MARK';
const setPlayer = payload => ({
  type: SET_PLAYER, payload,
});

export const CHECK_BOARD = 'CHECK_BOARD';
const checkBoard = payload => ({
  type: CHECK_BOARD, payload,
});

export const TAKE_TURN = 'TAKE_TURN';
const takeTurn = (payload) => {
  const { board } = payload;
  const turn = getOpponent(payload.turn);
  return { type: TAKE_TURN, turn, board };
};

export function onSelectPlayer(player) {
  return dispatch => dispatch(setPlayer(player));
}

export function onResetGame() {
  return dispatch => dispatch(resetGame());
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
  return dispatch => dispatch(checkBoard({ winner, done }));
}
