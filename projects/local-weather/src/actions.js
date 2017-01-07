import fetch from 'isomorphic-fetch';

const API_KEY = process.env.API_KEY;

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function requestWeather() {
  return { type: REQUEST_WEATHER };
}
export function receiveWeather(payload) {
  return { type: RECEIVE_WEATHER, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}

export function fetchWeather() {
  return (dispatch) => {
    dispatch(requestWeather());
  };
}
