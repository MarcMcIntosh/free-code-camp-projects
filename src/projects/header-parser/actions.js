const prefix = str => `HEADER_PARSER_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVED = prefix('RECEIVED');
export const REJECTED = prefix('REJECTED');

const request = payload => ({ type: REQUEST, payload });
const received = payload => ({ type: RECEIVED, payload });
const rejected = payload => ({ type: REJECTED, payload });

const handleRes = (res) => {
  if (!res.ok) {
    const e = new Error(res.statusText);
    e.stack = res;
    throw e;
  }
  return res.json();
};

export const getHeaders = payload => (dispatch) => {
  dispatch(request(payload));
  return fetch(payload).then(handleRes).then(json => dispatch(received(json))).catch(error => dispatch(rejected(error)));
};
