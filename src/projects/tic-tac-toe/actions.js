const prefix = str => `TIC-TAC-TOE_${str}`;

export const RESET_GAME = prefix('RESET_GAME');
export const resetGame = () => ({ type: RESET_GAME });

export const SET_PLAYER = prefix('SELECT_MARK');
export const setPlayer = payload => ({ type: SET_PLAYER, payload });

export const TAKE_TURN = prefix('TAKE_TURN');
export const takeTurn = payload => ({ type: TAKE_TURN, payload });

export const SET_DIFFICULTY = prefix('SET_DIFFICULTY');
export const setDifficulty = payload => ({ type: SET_DIFFICULTY, payload });
