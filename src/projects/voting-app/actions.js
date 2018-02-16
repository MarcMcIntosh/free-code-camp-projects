import fetch from 'isomorphic-fetch';
import { SubmissionError } from 'redux-form';

const prefix = str => `VOTING-APP_${str}`;


export const REQUEST = prefix('REQUEST');
export const RECIEVED = prefix('RECIEVED');
export const REJECTED = prefix('REJECTED');

export const REQUEST_QUESTIONS = prefix('REQUEST_QUESTIONS');
export const RECIEVED_QUESTIONS = prefix('RECIEVED_QUESTIONS');

export const REQUEST_POLL = prefix('REQUEST_POLL');
export const RECIEVED_POLL = prefix('RECIEVED_POLL');

const request = payload => ({ type: REQUEST, payload });
// const recieved = payload => ({ type: RECIEVED, payload });
const rejected = payload => ({ type: REJECTED, payload });

const requestPoll = payload => ({ type: REQUEST_POLL, payload });
const recievedPoll = payload => ({ type: RECIEVED_POLL, payload });

export const requestQuestions = () => ({ type: REQUEST_QUESTIONS });
export const recievedQuestions = payload => ({ type: RECIEVED_QUESTIONS, payload });

function handleRes(res) {
  if (res.ok) { return res.json(); }
  if (/json/.test(res.headers.get('Content-Type'))) { throw res.json(); }

  const error = new Error(res.statusText);
  error.stack = res;
  throw error;
}

export const createPoll = payload => (dispatch, getState) => {
  dispatch(request(payload));
  const { session: { token } } = getState();
  return fetch('/api/voting-app/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleRes).catch(error => new SubmissionError(error));
};

export const getPoll = payload => (dispatch) => {
  dispatch(requestPoll(payload));
  return fetch(`/api/voting-app/${payload}`).then((res) => {
    if (res.ok) { return res.json(); }
    const error = new Error(res.statusText);
    error.stack = res;
    throw error;
  }).then(json => dispatch(recievedPoll(json))).catch(error => dispatch(rejected(error)));
};

export const getQuestions = () => (dispatch) => {
  dispatch(requestQuestions());
  return fetch('/api/voting-app/').then((res) => {
    if (res.ok) { return res.json(); }
    const error = new Error(res.statusText);
    error.stack = res;
    throw error;
  }).then(json => dispatch(recievedQuestions(json))).catch(error => dispatch(rejected(error)));
};
