const prefix = str => `TRINBUTE-PAGE_${str}`;

export const ON_LOAD = prefix('ON_LOAD');
export const onLoad = () => ({ type: ON_LOAD });

export const ON_ERROR = prefix('ON_ERROR');
export const onError = error => ({ type: ON_ERROR, payload: error.message || String(error) });

export const SET_SRC = prefix('SET_SRC');
export const setSrc = payload => ({ type: SET_SRC, payload });
