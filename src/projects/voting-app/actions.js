const prefix = str => `VOTING-APP_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECIEVED = prefix('RECIEVED');
export const REJECTED = prefix('REJECTED');
export const REDIRECT = prefix('REDIRECT');

export const request = payload => ({ type: REQUEST, payload });
export const recieved = payload => ({ type: RECIEVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
export const redirect = payload => ({ type: REDIRECT, payload });

export const onCreate = payload => dispatch => dispatch(request(payload));
export const onRegister = payload => dispatch => dispatch(request(payload));
