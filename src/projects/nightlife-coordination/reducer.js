import {
  REFRESH_REQUEST,
  REFRESH_RECIEVED,
  REFRESH_REJECTED,

  REGISTER_REQUEST,
  REGISTER_RECIEVED,
  REGISTER_REJECTED,

  LOGIN_REQUEST,
  LOGIN_RECIEVED,
  LOGIN_REJECTED,

  LOGOUT_REQUEST,
  LOGOUT_RECIEVED,
  LOGOUT_REJECTED,

  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_RECIEVED,
  DELETE_ACCOUNT_REJECTED,

} from './actions';

export const DEFAULT_STATE = {
  authenticated: false,
  fetching: false,
  username: '',
  id: '',
  error: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case REFRESH_REQUEST:
    case DELETE_ACCOUNT_REQUEST: return { ...state, fetching: true };

    case REGISTER_RECIEVED:
    case LOGIN_RECIEVED: return { ...state, authenticated: true, fetching: false };

    case REFRESH_RECIEVED: return { ...state, ...action.payload, authenticated: true, fetching: false };

    case REFRESH_REJECTED: return { ...state, authenticated: false, fetching: false, username: '', id: '' };

    case LOGOUT_REJECTED:
    case LOGOUT_RECIEVED:
    case DELETE_ACCOUNT_REJECTED:
    case DELETE_ACCOUNT_RECIEVED: return { ...state, authenticated: false, fetching: false, username: '', id: '', answers: {}, error: action.payload || '' };


    case REGISTER_REJECTED:
    case LOGIN_REJECTED: return { ...state, fetching: false, authenticated: false };

    default: return { ...state };
  }
}
