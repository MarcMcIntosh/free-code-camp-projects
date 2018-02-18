import { RECIEVED, REJECTED, REMOVE, REGISTER, LOGOUT, LOGIN } from '../actions/session';

export const DEFAULT_STATE = {
  username: '',
  id: '',
  fetching: false,
  authenticated: false,
  error: '',
};

const valFrom = (arr, obj) => arr.reduce((a, b) => (a && Object.prototype.hasOwnProperty.call(a, b) ? a[b] : ''), obj);

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RECIEVED: {
      const username = valFrom(['data', 'username'], action.payload);
      const id = valFrom(['data', '_id'], action.payload);
      return { ...state, username, id, fetching: false, authenticated: true, error: '' };
    }
    case REJECTED: {
      const error = action.payload.message || action.payload.toString();
      return { ...state, fetching: false, authenticated: false, error };
    }
    case REMOVE: return { ...state, user: {}, fetching: false, authenticated: false, error: '' };
    case REGISTER: case LOGIN: case LOGOUT: return { ...state, fetching: true, error: '' };
    default: return state;
  }
}
