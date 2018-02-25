import { SubmissionError } from 'redux-form';
// import handleRes from './handleRes';
import hasValidationErrors from './hasValidationErrors';

/* prefixes '/api/voting-app/' to the url, and adds credentials: 'same-origin' to fetch */
import fetch from './fetchWithSession';

const prefix = str => `VOTING-APP_${str}`;

function handleRes(res) {
  if (!res.ok) { throw res.statusText; }
  return res.json();
}

export const TOGGLE_MENU = prefix('TOGGLE_MENU');
export const toggleMenu = () => ({ type: TOGGLE_MENU });

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


export const QUESTIONS_REQUEST = prefix('QUESTIONS_REQUEST');
export const QUESTIONS_REJECTED = prefix('QUESTIONS_REJECTED');
export const QUESTIONS_RECIEVED = prefix('QUESTIONS_RECIEVED');

const questionsRequest = () => ({ type: QUESTIONS_REQUEST });
const questionsRejected = payload => ({ type: QUESTIONS_REJECTED, payload });
const questionsRecieved = payload => ({ type: QUESTIONS_RECIEVED, payload });

export const getQuestions = () => (dispatch) => {
  dispatch(questionsRequest());
  return fetch('', { headers: { Accept: 'application/json' } }).then(handleRes).then(json => dispatch(questionsRecieved(json))).catch(error => dispatch(questionsRejected(error)));
};


export const CREATE_POLL_REQUEST = prefix('CREATE_POLL_REQUEST');
// export const CREATE_POLL_REJECTED = prefix('CREATE_POLL_REJECTED');
// export const CREATE_POLL_RECIEVED = prefix('CREATE_POLL_RECIEVED');

const createPollRequest = payload => ({ type: CREATE_POLL_REQUEST, payload });
// const createPollRejected = payload => ({ type: CREATE_POLL_REJECTED, payload });
// const createPollRecieved = payload => ({ type: CREATE_POLL_RECIEVED, payload });

export const createPoll = payload => (dispatch) => {
  dispatch(createPollRequest(payload));
  return fetch('create', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(payload),
  }).then(handleRes).catch((error) => { throw new SubmissionError(error); });
};


export const GET_POLL_REQUEST = prefix('GET_POLL_REQUEST');
export const GET_POLL_RECIEVED = prefix('GET_POLL_RECIEVED');
export const GET_POLL_REJECTED = prefix('GET_POLL_REJECTED');

const getPollRequest = payload => ({ type: GET_POLL_REQUEST, payload });
const getPollRecieved = payload => ({ type: GET_POLL_RECIEVED, payload });
const getPollRejected = payload => ({ type: GET_POLL_REJECTED, payload });


export const getPoll = payload => (dispatch) => {
  dispatch(getPollRequest(payload));
  if (!payload) { return dispatch(getPollRejected({ message: 'poll id required' })); }

  return fetch(`view/${payload}`, {
    headers: { Accept: 'application/json' },
  }).then(handleRes).then(json => dispatch(getPollRecieved(json))).catch(error => dispatch(getPollRejected(error)));
};

// export const SET_VOTE_TO = prefix('SET_VOTE_TO');
export const SET_VOTE_REQUEST = prefix('SET_VOTE_REQUEST');
export const SET_VOTE_REJECTED = prefix('SET_VOTE_REQUEST');
export const SET_VOTE_RECIEVED = prefix('SET_VOTE_REJECTED');

const setVoteRequest = payload => ({ type: SET_VOTE_REQUEST, payload });
const setVoteRejected = payload => ({ type: SET_VOTE_REJECTED, payload });
const setVoteRecieved = payload => ({ type: SET_VOTE_RECIEVED, payload });

export const setVote = payload => (dispatch) => {
  dispatch(setVoteRequest(payload));
  return fetch('vote', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(payload),
  }).then(handleRes).then((json) => {
    const info = { ...json, ...payload };
    return dispatch(setVoteRecieved(info));
  }).catch((err) => {
    const info = { message: err, ...payload };
    return dispatch(setVoteRejected(info));
  });
};
