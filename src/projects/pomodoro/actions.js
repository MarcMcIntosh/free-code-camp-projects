const prefix = str => `POMODORO-CLOCK_${str}`;

export const TICK = prefix('TICK');
export const tick = () => ({ type: TICK });

export const START = prefix('START');
export const start = payload => ({ type: START, payload });

export const STOP = prefix('STOP');
export const stop = () => ({ type: STOP });

export const RESET = prefix('RESET');
export const reset = () => ({ type: RESET });

export const MENU = prefix('MENU');
export const menu = () => ({ type: MENU });

/* Verify below */
export const SET_SESSION = prefix('SET_SESSION');
export const setSession = payload => ({ type: SET_SESSION, payload });

export const SET_SHORT_BREAK = prefix('SET_SHORT_BREAK');
export const setShortBreak = payload => ({ type: SET_SHORT_BREAK, payload });

export const SET_LONG_BREAK = prefix('SET_LONG_BREAK');
export const setLongBreak = payload => ({ type: SET_LONG_BREAK, payload });

export const SET_MAX_ROUNDS = prefix('SET_MAX_ROUNDS');
export const setMaxRounds = payload => ({
  type: SET_MAX_ROUNDS,
  payload,
});
