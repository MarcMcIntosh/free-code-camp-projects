import {
  REQUEST_QUESTIONS,
  RECIEVED_QUESTIONS,
  REQUEST_POLL,
  RECIEVED_POLL,
  REJECTED,
} from './actions';

export const DEFAULT_STATE = {
  fetching: false,
  poll: {},
  questions: [],
  error: '',
  // redirectTo: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS: return { ...state, fetching: true, error: '', questions: [] };
    case RECIEVED_QUESTIONS: return { ...state, fetching: true, polls: action.payload };

    case REQUEST_POLL: return { ...state, fetching: true, error: '', poll: {} };
    case RECIEVED_POLL: return { ...state, fetching: false, error: '', poll: action.payload };

    case REJECTED: return { ...state, fetching: false, error: action.payload.message || action.payload.toString() || '' };
    default: return state;
  }
}
