import {
  // RECEIVE_ERROR,
  // RECEIVE_USER,
  // RECEIVE_STREAM,
  TOGGLE_FILTER,
  RECEIVE,
  REJECT,
  REQUEST,
} from './actions';

export const DEFAULT_STATE = {
  error: '',
  users: {},
  fetching: false,
  display: 'all',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, fetching: true };
    case RECEIVE: return { ...state, users: action.payload, fetching: false };
    case REJECT: return { ...state, fetching: false, error: String(action.payload) };
    /* case RECEIVE_ERROR: return { ...state, error: action.payload };

    case RECEIVE_USER: {
      const name = action.payload.name;
      const user = Object.assign({}, state.users[name], {
        [name]: action.payload,
      });
      return { ...state, users: { ...state.users, ...user },
      };
    }
    case RECEIVE_STREAM: {
      const name = action.payload.name;
      const user = Object.assign({}, state.users[name], {
        [name]: action.payload,
      });
      return { ...state, users: { ...state.users, ...user } };
    }
    */
    case TOGGLE_FILTER: return { ...state, display: action.payload };

    default: return state;
  }
}
