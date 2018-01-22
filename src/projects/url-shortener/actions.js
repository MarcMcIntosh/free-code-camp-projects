import fetch from 'isomorphic-fetch';

const prefix = str => `URL_SHORTENER_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('RECEIVE');
export const REJECTED = prefix('REJECT');

const request = payload => ({ type: REQUEST, payload });
const received = payload => ({ type: RECEIVED, payload });
const rejected = payload => ({ type: REJECTED, payload });

const handleRes = (res) => {
  if (!res.ok) {
    const err = new Error(res.statusText);
    err.stack = res;
    throw err;
  }
  return res.json();
};

export const onSubmit = (address, values) => (dispatch) => {
  dispatch(request(address));
  return fetch(address, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: values.address }) }).then(handleRes).then(json => dispatch(received(json))).catch(err => dispatch(rejected(err.toString())));
};
