import fetch from 'isomorphic-fetch';
import { countries, flags } from './data';

const prefix = str => `FORCE_DIRECTED__${str}`;

export const REQUEST_DATA = prefix('REQUEST_DATA');
export const requestData = () => ({ type: REQUEST_DATA });

export const RECIEVE_DATA = prefix('RECIEVE_DATA');
export const recieveData = payload => ({
  type: RECIEVE_DATA,
  payload,
});

export const RECIEVE_ERROR = prefix('RECIEVE_ERROR');
export const recieveError = payload => ({
  type: RECIEVE_ERROR,
  payload,
});

export const RECIEVE_FLAGS = prefix('RECIEVE_FLAGS');
const recieveFlags = payload => ({ type: RECIEVE_FLAGS, payload });
export const REQUEST_FLAGS = prefix('REQUEST_FLAGS');
const requestFlags = () => ({ type: REQUEST_FLAGS });

export const fetchFlags = (address = flags) => (dispatch) => {
  dispatch(requestFlags());
  return fetch(address).then((res) => {
    if (!res.ok) {
      const error = new Error(`fetching flags from ${address}`);
      error.response = res;
      throw error;
    }
    return res.json();
  }).then(json => dispatch(recieveFlags(json))).catch(error => dispatch(recieveError(error)));
};

export const fetchData = (address = countries) => (dispatch) => {
  dispatch(requestData());
  return fetch(address).then((res) => {
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    } else {
      return res.json();
    }
  }).then((json) => {
    dispatch(recieveData(json));
  }).catch((error) => {
    dispatch(recieveError(error));
  });
};
