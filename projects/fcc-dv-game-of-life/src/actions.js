export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({ type: RESET_GAME });

export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const togglePlay = payload => ({ type: TOGGLE_PLAY, payload });

export const SET_SPEED = 'SET_SPEED';
export const setSpeed = payload => ({ type: SET_SPEED, payload });

export const SET_SIZE = 'SET_SIZE';
export const setSize = payload => ({ type: SET_SIZE, payload });

export const NEXT_GEN = 'NEXT_GEN';
export const nextGen = () => ({ type: NEXT_GEN });

export const SET_GAME = 'SET_GAME';
export const setGame = payload => ({ type: SET_GAME, payload });

export const SET_RANDOM = 'SET_RANDOM';
export const setRandom = () => ({ type: SET_RANDOM });
