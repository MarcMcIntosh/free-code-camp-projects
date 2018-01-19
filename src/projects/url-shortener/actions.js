const prefix = str => `URL_SHORTENER_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('RECEIVE');
export const REJECTED = prefix('REJECT');

export const request = payload => ({ type: REQUEST, payload });
export const received = payload => ({ type: RECEIVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
