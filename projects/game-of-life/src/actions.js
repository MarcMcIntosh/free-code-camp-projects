export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({ type: RESET_GAME });

export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const togglePlay = payload => ({ type: TOGGLE_PLAY, payload });

export const SET_SPEED = 'SET_SPEED';
export const setSpeed = payload => ({ type: SET_SPEED, payload });

export const SET_SIZE = 'SET_SIZE';
export const setSize = payload => ({ type: SET_SIZE, payload });

export const SET_GAME = 'SET_GAME';
export const setGame = payload => dispatch => dispatch({ type: SET_GAME, payload });

export const SET_RANDOM = 'SET_RANDOM';
export const setRandom = () => ({ type: SET_RANDOM });

export const NEXT_GEN = 'NEXT_GEN';
export const nextGen = payload => dispatch => dispatch({
  type: NEXT_GEN,
  payload,
});

export const UPDATE_GEN = 'UPDATE_GEN';
export const updateGen = () => dispatch => dispatch({ type: UPDATE_GEN });

export const TOGGLE_SQUARE = 'TOGGLE_SQUARE';
export const toggleSquare = payload => dispatch => dispatch({ type: TOGGLE_SQUARE, payload });