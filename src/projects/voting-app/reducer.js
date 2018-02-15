import { REQUEST, RECIEVED, REJECTED } from './actions';

export const DEFAULT_STATE = {
  fetching: false,
  polls: {},
  view: {},
  error: '',
  // redirectTo: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, fetching: true };
    case RECIEVED: return { ...state, fetching: false, polls: action.payload };
    case REJECTED: return { ...state, fetching: false, error: action.payload.message || action.payload.toString() || '' };
    default: return state;
  }
}
