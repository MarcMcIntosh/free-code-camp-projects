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

export const GAME_OVER = 'GAME_OVER';

export const TAKE_TURN = 'TAKE_TURN';
const takeTurn = (payload) => {
  const { board, player } = payload;
  const winner = checkWinner(board);
  const done = (winner) ? true : isFull(board);
  const turn = getOpponent(player);
  return { type: TAKE_TURN, turn, winner, board, done };
};

export function onSelectPlayer(player) {
  return dispatch => dispatch(setPlayer(player));
}

export function onTakeTurn(i) {
  return (dispatch, getState) => {
    const { player, board } = getState();
    const arr = board.slice();
    arr[i] = player;
    dispatch(takeTurn({ board: arr, player }));
  };
}

export function onResetGame() {
  return dispatch => dispatch(resetGame());
}

export function onAiMove() {
  return (dispatch, getState) => {
    const state = getState();
    const { ai, board } = state;
    const move = minimax(board, ai);
    const arr = board.slice();
    arr[move] = ai;
    dispatch(takeTurn({ board: arr, player: ai }));
  };
}
