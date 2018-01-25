import fetch from 'isomorphic-fetch';

const prefix = str => `TIMESTAMP_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('REVEIVED');
export const REJECTED = prefix('REJECTED');
export const RESET = prefix('RESET');

const request = payload => ({ type: REQUEST, payload });
const received = payload => ({ type: RECEIVED, payload });
const rejected = payload => ({ type: REJECTED, payload });

export const reset = () => ({ type: RESET });

const handleRes = (res) => {
  if (!res.ok) {
    const e = new Error(res.statusText);
    e.stack = res;
    throw e;
  }
  return res.json();
};

export const fetchDate = payload => (dispatch) => {
  dispatch(request(payload));
  return fetch(payload).then(handleRes).then(json => dispatch(received(json))).catch(error => dispatch(rejected(error)));
};
