import fetch from 'isomorphic-fetch';
import cyclistData from './data';

const prefix = str => `SCATTER-PLOT-GRAPH_${str}`;

export const REQUEST = prefix('REQUEST');
export const request = () => ({ type: REQUEST });

export const RECIEVE = prefix('RECIEVE');
export const recieve = payload => ({ type: RECIEVE, payload });

export const REJECT = prefix('REJECT');
export const reject = payload => ({ type: REJECT, payload });

export const fetchData = (address = cyclistData) => (dispatch) => {
  dispatch(request());
  return fetch(address).then((res) => {
    if (!res.ok) { throw new Error(res.statusText); }
    return res.json();
  }).then(json => dispatch(recieve(json))).catch(error => dispatch(reject(error.toString())));
};
