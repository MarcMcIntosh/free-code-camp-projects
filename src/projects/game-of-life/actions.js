const prefix = str => `GAME-OF-LIFE_${str}`;

export const RULES = prefix('RULES');
export const toggleRules = () => ({ type: RULES });

export const RESET_GAME = prefix('RESET_GAME');
export const resetGame = () => ({ type: RESET_GAME });

export const TOGGLE_PLAY = prefix('TOGGLE_PLAY');
export const togglePlay = payload => ({ type: TOGGLE_PLAY, payload });

export const SET_SPEED = prefix('SET_SPEED');
export const setSpeed = payload => ({ type: SET_SPEED, payload });

export const SET_SIZE = prefix('SET_SIZE');
export const setSize = payload => ({ type: SET_SIZE, payload });

export const SET_GAME = prefix('SET_GAME');
export const setGame = payload => dispatch => dispatch({ type: SET_GAME, payload });

export const SET_RANDOM = prefix('SET_RANDOM');
export const setRandom = () => ({ type: SET_RANDOM });

export const NEXT_GEN = prefix('NEXT_GEN');
export const nextGen = payload => dispatch => dispatch({
  type: NEXT_GEN,
  payload,
});

export const UPDATE_GEN = prefix('UPDATE_GEN');
export const updateGen = () => dispatch => dispatch({ type: UPDATE_GEN });

export const TOGGLE_SQUARE = prefix('TOGGLE_SQUARE');
export const toggleSquare = payload => dispatch => dispatch({ type: TOGGLE_SQUARE, payload });
