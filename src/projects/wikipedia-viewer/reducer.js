import { REQUESTS, RECEIVED, REJECTED } from './actions';

export const DEFAULT_STATE = { isFetching: false, results: {}, error: '' };

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUESTS: return { ...state, isFetching: true };
    case RECEIVED: return {
      ...state,
      error: '',
      isFetching: false,
      results: action.payload,
    };
    case REJECTED: return {
      ...state,
      isFetching: false,
      error: String(action.payload),
    };
    default: return state;
  }
}

export default reducer;
