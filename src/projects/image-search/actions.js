import fetch from 'isomorphic-fetch';

const prefix = str => `IMAGE-SEARCH__${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('RECEIVED');
export const REJECTED = prefix('REJECTED');
export const SET_OFFSET = prefix('SET_OFFSET');
export const SET_TERM = prefix('SET_TERM');
export const GET_LATEST = prefix('GET_LATEST');

export const request = payload => ({ type: REQUEST, payload });
export const received = payload => ({ type: RECEIVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
export const setOffset = payload => ({ type: SET_OFFSET, payload });
export const setTerm = payload => ({ type: SET_TERM, payload });
export const getLatest = payload => ({ type: GET_LATEST, payload });

const handleRes = (res) => {
  if (!res.ok) { const err = new Error(res.statusText); err.stack = res; throw err; }
  return res.json();
};

export const searchFor = payload => (dispatch) => {
  dispatch(request(payload));
  return fetch(payload, { Accept: 'application/json' }).then(handleRes).then(json => dispatch(received(json))).catch(error => dispatch(rejected(error)));
};

export const latest = payload => (dispatch) => {
  dispatch(request(payload));
  return fetch(payload, { Accept: 'application/json' }).then(handleRes).then(json => dispatch(getLatest(json))).catch(error => dispatch(rejected(error)));
};
