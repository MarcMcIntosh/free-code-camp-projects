
const prefix = str => `VOTING-APP_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECIEVED = prefix('RECIEVED');
export const REJECTED = prefix('REJECTED');

export const request = payload => ({ type: REQUEST, payload });
export const recieved = payload => ({ type: RECIEVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
