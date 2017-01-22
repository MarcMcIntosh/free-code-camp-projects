import minimax from './util/minimax';

export const RESET_GAME = 'RESET_GAME';
const resetGame = () => ({ type: RESET_GAME });
export const SET_PLAYER = 'SELECT_MARK';
const setPlayer = payload => ({
  type: SET_PLAYER, payload,
});

export const GAME_OVER = 'GAME_OVER';

export const TAKE_TURN = 'TAKE_TURN';
const takeTurn = payload => ({
  type: TAKE_TURN, payload,
});

export const MAKE_MOVE = 'MAKE_MOVE';
export const makeMove = payload => ({
  type: MAKE_MOVE, payload,
});

export function onSelectPlayer(player) {
  return dispatch => dispatch(setPlayer(player));
}

export function onTakeTurn(arr) {
  return dispatch => dispatch(takeTurn(arr));
}

export function onResetGame() {
  return dispatch => dispatch(resetGame());
}

export function aiMove() {
  return (dispatch, getState) => {
    const { ai, board } = getState();
    const move = minimax(board, ai);
    dispatch(makeMove(move));
  };
}
