import { SubmissionError } from 'redux-form';
import { saveEvent, deleteEvent, getEvent, geoSearch, locationSearch } from './apiService';

const prefix = str => `NIGHTLIFE-COORDINATION_${str}`;

function handleRes(res) {
  if (!res.ok) { throw res.statusText; }
  return res.json();
}

function hasValidationErrors(json) {
  if (Object.prototype.hasOwnProperty.call(json, 'validationErrors')) {
    throw json;
  } else if (json.error) {
    const err = { ...json, validationErrors: { _error: json.message } };
    throw err;
  }
  return json;
}

export const REFRESH_REQUEST = prefix('REFRESH_REQUEST');
export const REFRESH_RECIEVED = prefix('REFRESH_RECIEVED');
export const REFRESH_REJECTED = prefix('REFRESH_REJECTED');

const refreshRequest = () => ({ type: REFRESH_REQUEST });
const refreshRecieved = payload => ({ type: REFRESH_RECIEVED, payload });
const refreshRejected = payload => ({ type: REFRESH_REJECTED, payload });

export const refresh = () => (dispatch) => {
  dispatch(refreshRequest());
  return fetch('account').then(handleRes).then(json => dispatch(refreshRecieved(json))).catch(err => dispatch(refreshRejected(err)));
};

export const REGISTER_REQUEST = prefix('REGISTER_REQUEST');
export const REGISTER_RECIEVED = prefix('REGISTER_RECIEVED');
export const REGISTER_REJECTED = prefix('REGISTER_REJECTED');

const registerRequest = payload => ({ type: REGISTER_REQUEST, payload });
const registerRecieved = payload => ({ type: REGISTER_RECIEVED, payload });
const registerRejected = payload => ({ type: REGISTER_REJECTED, payload });

export const register = payload => (dispatch) => {
  dispatch(registerRequest(payload));
  return fetch('register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(hasValidationErrors)
    .then(json => dispatch(registerRecieved(json)))
    .catch(({ validationErrors, ...error }) => {
      if (validationErrors) {
        dispatch(registerRejected(error));
        throw new SubmissionError(validationErrors);
      }
      return dispatch(registerRejected(error));
    });
};


export const LOGIN_REQUEST = prefix('LOGIN_REQUEST');
export const LOGIN_REJECTED = prefix('LOGIN_REJECTED');
export const LOGIN_RECIEVED = prefix('LOGIN_RECIEVED');

const loginRequest = payload => ({ type: LOGIN_REQUEST, payload });
const loginRejected = payload => ({ type: LOGIN_REJECTED, payload });
const loginRecieved = payload => ({ type: LOGIN_RECIEVED, payload });

export const login = payload => (dispatch) => {
  dispatch(loginRequest(payload));
  return fetch('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(hasValidationErrors)
    .then(json => dispatch(loginRecieved(json)))
    .catch(({ validationErrors, ...error }) => {
      if (validationErrors) {
        dispatch(loginRejected(error));
        throw new SubmissionError(validationErrors);
      } else {
        return dispatch(loginRejected(error));
      }
    });
};

export const LOGOUT_REQUEST = prefix('LOGOUT_REQUEST');
export const LOGOUT_REJECTED = prefix('LOGOUT_REJECTED');
export const LOGOUT_RECIEVED = prefix('LOGOUT_RECIEVED');

const logoutRequest = () => ({ type: LOGOUT_REQUEST });
const logoutRejected = payload => ({ type: LOGOUT_REJECTED, payload });
const logoutRecieved = payload => ({ type: LOGOUT_RECIEVED, payload });

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  return fetch('logout').then(handleRes).then(json => dispatch(logoutRecieved(json))).catch(error => dispatch(logoutRejected(error)));
};

export const DELETE_ACCOUNT_REQUEST = prefix('DELETE_ACCOUNT_REQUEST');
export const DELETE_ACCOUNT_RECIEVED = prefix('DELETE_ACCOUNT_RECIEVED');
export const DELETE_ACCOUNT_REJECTED = prefix('DELETE_ACCOUNT_REJECTED');

const deleteAccountRequest = () => ({ type: DELETE_ACCOUNT_REQUEST });
const deleteAccountRecieved = payload => ({ type: DELETE_ACCOUNT_RECIEVED, payload });
const deleteAccountRejected = payload => ({ type: DELETE_ACCOUNT_REJECTED, payload });

export const deleteAccount = () => (dispatch) => {
  dispatch(deleteAccountRequest());
  return fetch('account', { method: 'DELETE' }).then(handleRes).then(json => dispatch(deleteAccountRecieved(json))).catch(err => dispatch(deleteAccountRejected(err)));
};


export const SAVE_EVENT_REQUEST = prefix('SAVE_EVENT_REQUEST');
export const SAVE_EVENT_REJECTED = prefix('SAVE_EVENT_REJECTED');
export const SAVE_EVENT_RECIEVED = prefix('SAVE_EVENT_RECIEVED');

const saveEventRequest = payload => ({ type: SAVE_EVENT_REQUEST, payload });
const saveEventRejected = payload => ({ type: SAVE_EVENT_REJECTED, payload });
const saveEventRecieved = payload => ({ type: SAVE_EVENT_RECIEVED, payload });

export const handleSaveEvent = payload => (dispatch) => {
  dispatch(saveEventRequest(payload));
  return saveEvent(payload)
    .then(handleRes)
    .then(json => dispatch(saveEventRecieved(json)))
    .catch(err => dispatch(saveEventRejected(err)));
};

export const DELETE_EVENT_REQUEST = prefix('DELETE_EVENT_REQUEST');
export const DELETE_EVENT_RECIEVED = prefix('DELETE_EVENT_RECIEVED');
export const DELETE_EVENT_REJECTED = prefix('DELETE_EVENT_REJECTED');

const deleteEventRequest = payload => ({ type: DELETE_EVENT_REQUEST, payload });
const deleteEventRecieved = payload => ({ type: DELETE_EVENT_RECIEVED, payload });
const deleteEventRejected = payload => ({ type: DELETE_EVENT_REJECTED, payload });

export const handleDeleteEvent = payload => (dispatch) => {
  dispatch(deleteEventRequest(payload));
  return deleteEvent(payload)
    .then(handleRes)
    .then(json => dispatch(deleteEventRecieved(json)))
    .catch(err => dispatch(deleteEventRejected(err)));
};

export const GET_EVENT_REQUEST = prefix('GET_EVENT_REQUEST');
export const GET_EVENT_RECIEVED = prefix('GET_EVENT_RECIEVED');
export const GET_EVENT_REJECTED = prefix('GET_EVENT_REJECTED');

const getEventRequest = payload => ({ type: GET_EVENT_REQUEST, payload });
const getEventRecieved = payload => ({ type: GET_EVENT_RECIEVED, payload });
const getEventRejected = payload => ({ type: GET_EVENT_REJECTED, payload });

export const handleGetEvent = payload => (dispatch) => {
  dispatch(getEventRequest(payload));
  return getEvent(payload)
    .then(handleRes)
    .then(json => dispatch(getEventRecieved(json)))
    .then(err => dispatch(getEventRejected(err)))
  ;
};

export const GEO_SEARCH_REQUEST = prefix('GEO_SEARCH_REQUEST');
export const GEO_SEARCH_RECIEVED = prefix('GEO_SEARCH_RECIEVED');
export const GEO_SEARCH_REJECTED = prefix('GEO_SEARCH_REJECTED');

const geoSearchRequest = payload => ({ type: GEO_SEARCH_REQUEST, payload });
const geoSearchRecieved = payload => ({ type: GEO_SEARCH_RECIEVED, payload });
const geoSearchRejected = payload => ({ type: GEO_SEARCH_REJECTED, payload });

export const handleGeoSearch = payload => (dispatch) => {
  dispatch(geoSearchRequest(payload));
  return geoSearch(payload)
    .then(handleRes)
    .then(json => dispatch(geoSearchRecieved(json)))
    .catch(err => dispatch(geoSearchRejected(err)));
};

export const LOCATION_SEARCH_REQUEST = prefix('LOCATION_SEARCH_REQUEST');
export const LOCATION_SEARCH_REJECTED = prefix('LOCATION_SEARCH_REJECTED');
export const LOCATION_SEARCH_RECIEVED = prefix('LOCATION_SEARCH_RECIEVED');

const locationSearchRequest = payload => ({ type: LOCATION_SEARCH_REQUEST, payload });
const locationSearchRecieved = payload => ({ type: LOCATION_SEARCH_RECIEVED, payload });
const locationSearchRejected = payload => ({ type: LOCATION_SEARCH_REJECTED, payload });

export const handleLocationSearch = payload => (dispatch) => {
  dispatch(locationSearchRequest(payload));
  return locationSearch(payload)
    .then(handleRes)
    .then(json => dispatch(locationSearchRecieved(json)))
    .catch(err => dispatch(locationSearchRejected(err)));
};
