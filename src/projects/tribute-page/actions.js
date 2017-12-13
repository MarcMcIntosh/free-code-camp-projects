const prefix = str => `TRINBUTE-PAGE_${str}`;

// export const FETCHING = prefix('FETCHING');
// export const RECEIVED = prefix('RECEIVED');
// export const REJECTED = prefix('REJECTED');
export const SET_TIMER = prefix('SET_TIMER');
export const setTimer = payload => ({ type: setTimer, payload });

export const SET_SRC = prefix('SET_SRC');
export const setSrc = payload => ({ type: SET_SRC, payload });
