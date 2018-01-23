import { REQUEST, RECEIVED, REJECTED } from './actions';

export const DEFAULT_STATE = { fetching: false, results: {}, error: '' };

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, fetching: true, error: '' };
    case RECEIVED: return { ...state, fetching: false, results: action.payload };
    case REJECTED: return { ...state, fetching: false, error: action.payload.message || action.payload.toString() };
    default: return state;
  }
}
