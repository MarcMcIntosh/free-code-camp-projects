import fetch from 'isomorphic-fetch';

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
export const REFRESH = prefix('REFRESH');

function handleRes(res) {
  if (res.ok) { return res.json(); }
  const error = new Error(res.statusText);
  error.stack = res;
  throw error;
}

export const register = payload => (dispatch) => {
  dispatch({ type: REGISTER, payload });
  return fetch('/auth/register', { method: 'POST', body: payload }).then(handleRes).then(json => dispatch(recieved(json))).catch(error => dispatch(rejected(error)));
};

export const login = payload => (dispatch) => {
  dispatch({ type: LOGIN, payload });
  return fetch('/auth/login', { method: 'POST', body: payload }).then(handleRes).then(json => dispatch(recieved(json))).catch(error => dispatch(rejected(error)));
};

export const logout = payload => (dispatch) => {
  dispatch({ type: LOGOUT, payload });
  return fetch('/auth/logout', { headers: payload }).then(handleRes).then(json => dispatch(remove(json))).catch(error => dispatch(rejected(error)));
};

export const refresh = payload => (dispatch) => {
  dispatch({ type: REFRESH, payload });
  return fetch('/auth/refresh', { headers: payload }).then(handleRes).then(json => dispatch(recieved(json))).catch(error => dispatch(rejected(error)));
};
