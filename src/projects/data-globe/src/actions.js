import fetch from 'isomorphic-fetch';
import { meteorStringData, worldAtlasData } from './data';

const prefix = str => `DATA-GLOBE_${str}`;

export const REQUEST_MTR_DATA = prefix('REQUEST_MTR_DATA');
export const requestMtrData = () => ({ type: REQUEST_MTR_DATA });

export const RECIEVE_MTR_DATA = prefix('RECIEVE_MTR_DATA');
export const recieveMtrData = payload => ({
  type: RECIEVE_MTR_DATA,
  payload,
});

export const RECIEVE_MTR_ERROR = prefix('RECIEVE_MTR_ERROR');
export const recieveMtrError = payload => ({
  type: RECIEVE_MTR_ERROR,
  payload,
});

export const REQUEST_GEO_DATA = prefix('REQUEST_GEO_DATA');
export const requestGeoData = () => ({ type: REQUEST_GEO_DATA });

export const RECIEVE_GEO_DATA = prefix('RECIEVE_GEO_DATA');
export const recieveGeoData = payload => ({
  type: RECIEVE_GEO_DATA,
  payload,
});

export const RECIEVE_GEO_ERROR = prefix('RECIEVE_GEO_ERROR');
export const recieveGeoError = payload => ({
  type: RECIEVE_GEO_ERROR,
  payload,
});

export const fetchMtrData = (address = meteorStringData) => (dispatch) => {
  dispatch(requestMtrData());
  return fetch(address).then((res) => {
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    } else {
      return res.json();
    }
  }).then((json) => {
    dispatch(recieveMtrData(json));
  }).catch((error) => {
    dispatch(recieveMtrError(error));
  });
};

export const fetchGeoData = (address = worldAtlasData) => (dispatch) => {
  dispatch(requestGeoData());
  return fetch(address).then((res) => {
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    } else {
      return res.json();
    }
  }).then((json) => {
    dispatch(recieveGeoData(json));
  }).catch((error) => {
    dispatch(recieveGeoError(error));
  });
};
