import {
  SUBMITED,
  RECEIVED,
  REJECTED,
  CLEAR_RESULTS,
} from './actions';

export const DEFAULT_STATE = {
  results: [],
  fetching: false,
  error: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SUBMITED: return { ...state, fetching: true };
    case RECEIVED: return { ...state, fetching: false, results: action.payload };
    case REJECTED: return { ...state, fetching: false, error: action.payload };
    case CLEAR_RESULTS: return { ...state, results: [] };
    default: return state;
  }
}
