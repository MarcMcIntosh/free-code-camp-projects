import { SubmissionError } from 'redux-form';
import handleRes from './handleRes';
import hasValidationErrors from './hasValidationErrors';

/* prefixes '/api/voting-app/' to the url, and adds credentials: 'same-origin' to fetch */
import fetch from './fetchWithSession';

const prefix = str => `VOTING-APP_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECIEVED = prefix('RECIEVED');
export const REJECTED = prefix('REJECTED');

/* User sync actions */
export const REGISTER_USER = prefix('REGISTER');
export const LOGIN_USER = prefix('LOGIN');
export const LOGOUT_USER = prefix('LOGOUT');
export const REQUEST_USER = prefix('REQUEST_USER');
export const REJECTED_USER = prefix('REJECTED_USER');
export const RECIEVED_USER = prefix('RECIEVED_USER');
export const REMOVE_USER = prefix('REMOVE_USER');
export const TOGGLE_MENU = prefix('TOGGLE_MENU');

export const toggleMenu = () => ({ type: TOGGLE_MENU });

const recievedUser = payload => ({ type: RECIEVED_USER, payload });
const rejectedUser = payload => ({ type: REJECTED_USER, payload });
const removeUser = payload => ({ type: REMOVE_USER, payload });


export const REQUEST_QUESTIONS = prefix('REQUEST_QUESTIONS');
export const RECIEVED_QUESTIONS = prefix('RECIEVED_QUESTIONS');

export const requestQuestions = () => ({ type: REQUEST_QUESTIONS });
export const recievedQuestions = payload => ({ type: RECIEVED_QUESTIONS, payload });


export const REQUEST_POLL = prefix('REQUEST_POLL');
export const RECIEVED_POLL = prefix('RECIEVED_POLL');

const requestPoll = payload => ({ type: REQUEST_POLL, payload });
const recievedPoll = payload => ({ type: RECIEVED_POLL, payload });


const request = payload => ({ type: REQUEST, payload });
// const recieved = payload => ({ type: RECIEVED, payload });
const rejected = payload => ({ type: REJECTED, payload });


/* Asyc Actions */

export const requestUser = () => (dispatch) => {
  dispatch({ type: REQUEST_USER });
  return fetch('user').then(handleRes).then(json => dispatch(recievedUser(json))).catch(error => dispatch(rejectedUser(error)));
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  return fetch('logout').then(handleRes).then(json => dispatch(removeUser(json))).catch(error => dispatch(rejectedUser(error)));
};


export const registerUser = payload => (dispatch) => {
  dispatch({ type: REGISTER_USER, payload });
  return fetch('register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(hasValidationErrors)
    .then(json => dispatch(recievedUser(json)))
    .catch(({ validationErrors, ...error }) => {
      if (validationErrors) { throw new SubmissionError(validationErrors); }
      dispatch(rejectedUser(error));
    });
};

export const login = payload => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload });
  return fetch('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleRes)
    .then(hasValidationErrors)
    .then(json => dispatch(recievedUser(json)))
    .catch(({ validationErrors, ...error }) => {
      if (validationErrors) { throw new SubmissionError(validationErrors); }
      dispatch(rejectedUser(error));
    });
};


export const createPoll = payload => (dispatch) => {
  dispatch(request(payload));
  return fetch('create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(payload),
  }).then(handleRes).catch(error => new SubmissionError(error));
};

export const getPoll = payload => (dispatch) => {
  dispatch(requestPoll(payload));
  return fetch(`poll/${payload}`, { headers: { Accept: 'application/json' } }).then(handleRes).then(json => dispatch(recievedPoll(json))).catch(error => dispatch(rejected(error)));
};

export const getQuestions = () => (dispatch) => {
  dispatch(requestQuestions());
  return fetch('questions', { headers: { Accept: 'application/json' } }).then(handleRes).then(json => dispatch(recievedQuestions(json))).catch(error => dispatch(rejected(error)));
};
