export const RESET = 'RESET';
export const SET_PLAYER = 'SELECT_MARK';
const setPlayer = payload => ({
  type: SET_PLAYER, payload,
});

export const TAKE_TURN = 'TAKE_TURN';
const takeTurn = payload => ({
  type: TAKE_TURN, payload,
});

export function onSelectPlayer(player) {
  return dispatch => dispatch(setPlayer(player));
}

export function onTakeTurn(arr) {
  return dispatch => dispatch(takeTurn(arr)),
};
