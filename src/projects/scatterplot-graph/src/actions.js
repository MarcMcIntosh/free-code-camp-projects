import fetch from 'isomorphic-fetch';
import cyclistData from './data';

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => ({ type: REQUEST_DATA });

export const RECIEVE_DATA = 'RECIEVE_DATA';
export const recieveData = payload => ({
  type: RECIEVE_DATA,
  payload,
});

export const RECIEVE_ERROR = 'RECIEVE_ERROR';
export const recieveError = payload => ({
  type: RECIEVE_ERROR,
  payload,
});

export const fetchData = (address = cyclistData) => (dispatch) => {
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
