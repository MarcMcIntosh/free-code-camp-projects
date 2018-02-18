import fetch from 'isomorphic-fetch';
import { SubmissionError } from 'redux-form';

const prefix = str => `SESSION_${str}`;

/* Sync */
export const RECIEVED = prefix('RECIEVED');
export const REJECTED = prefix('REJECTED');
export const REMOVE = prefix('REMOVE');

export const recieved = payload => ({ type: RECIEVED, payload });
export const rejected = payload => ({ type: REJECTED, payload });
export const remove = payload => ({ type: REMOVE, payload });

/* Async */
export const REGISTER = prefix('REGISTER');
export const LOGIN = prefix('LOGIN');
export const LOGOUT = prefix('LOGOUT');

function handleRes(res) {
  if (res.ok) { return res.json(); }
  const error = new Error(res.statusText);
  error.stack = res;
  throw error;
}

function checkForValidationErrors(json) {
  if (Object.prototype.hasOwnProperty.call(json, 'validationErrors')) {
    throw json;
  } else if (json.error) {
    return Object.assign({}, json, { validationErrors: { _error: json.nmessage } });
  }
  return json;
}
export const register = payload => (dispatch) => {
  dispatch({ type: REGISTER, payload });
  return fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(checkForValidationErrors)
    .then(json => dispatch(recieved(json)))
    .catch((error) => {
      if (Object.prototype.hasOwnProperty.call(error, 'validationErrors')) {
        throw new SubmissionError(error.validationErrors);
      } else {
        dispatch(rejected(error));
      }
    });
};

export const login = payload => (dispatch) => {
  dispatch({ type: LOGIN, payload });
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(checkForValidationErrors)
    .then(json => dispatch(recieved(json)))
    .catch((error) => {
      if (Object.prototype.hasOwnProperty.call(error, 'validationErrors')) {
        throw new SubmissionError(error.validationErrors);
      } else {
        dispatch(rejected(error));
      }
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  return fetch('/api/auth/logout', { credentials: 'same-origin' }).then(handleRes).then(json => dispatch(remove(json))).catch(error => dispatch(rejected(error)));
};
