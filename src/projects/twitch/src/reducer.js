import USER_NAMES from './users';

import {
  RECEIVE_ERROR,
  RECEIVE_USER,
  RECEIVE_STREAM,
  TOGGLE_FILTER,
} from './actions';

export const DEFAULT_STATE = {
  error: '',
  users: {},
  display: 'all',
  USER_NAMES,
  filters: ['all', 'online', 'offline'],
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RECEIVE_ERROR: return { ...state, error: action.payload };

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

    case TOGGLE_FILTER: return { ...state, display: action.payload };

    default: return state;
  }
}
