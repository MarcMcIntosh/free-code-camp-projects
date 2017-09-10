import USER_NAMES from './users';

import {
  RECEIVE_ERROR,
  RECEIVE_USER,
  RECEIVE_STREAM,
  TOGGLE_FILTER,
} from './actions';

export const DEFAULT_STATE = {
  error: '',
  users: [],
  display: 'all',
  USER_NAMES,
  filters: ['all', 'online', 'offline'],
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case RECEIVE_ERROR: return {
      ...state,
      error: action.payload,
    };

    case RECEIVE_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case RECEIVE_STREAM: {
      const { name, game } = action.payload;
      const users = state.users.map((d) => {
        if (d.name === name) {
          return { ...d, game, streaming: true };
        } return d;
      });
      return { ...state, users };
    }

    case TOGGLE_FILTER: return { ...state, display: action.payload };

    default: return state;
  }
}
