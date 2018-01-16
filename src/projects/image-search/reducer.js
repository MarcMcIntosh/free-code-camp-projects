import { REQUEST, RECEIVED, REJECTED } from './actions';

export const DEFAULT_STATE = { fetching: false, results: [], error: '' };

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, fetching: false };
    case RECEIVED: return { ...state, results: action.payload, fetching: false };
    case REJECTED: return { ...state, error: action.payload, fetching: false };
    default: return state;
  }
}
