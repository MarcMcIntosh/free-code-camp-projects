import fetch from 'isomorphic-fetch';
import DATA_URL from './data';

const prefix = str => `BAR_CHART_${str}`;
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

export const fetchData = () => (dispatch) => {
  dispatch(requestData());
  return fetch(DATA_URL).then((res) => {
    if (!res.ok) throw res.statusText;
    return res.json();
  }).then((json) => {
    dispatch(recieveData(json.data));
  }).catch((error) => {
    dispatch(recieveError(error));
  });
};
