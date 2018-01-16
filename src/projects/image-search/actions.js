const prefix = str => `IMAGE-SEARCH__${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('RECEIVED');
export const REJECTED = prefix('REJECTED');

export const request = payload => ({ type: REQUEST, payload });
export const received = payload => ({ type: RECEIVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
