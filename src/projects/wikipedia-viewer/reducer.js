import { ON_CHANGE, ON_FOCUS, ON_BLUR, REQUESTS, RECEIVED, REJECTED } from './actions';

export const DEFAULT_STATE = {
  submitting: false,
  results: [],
  error: '',
  active: false,
  value: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ON_CHANGE: return { ...state, error: '', value: action.payload };
    case ON_FOCUS: return { ...state, error: '', active: true };
    case ON_BLUR: return { ...state, error: '', active: false };
    case REQUESTS: return { ...state, submit: true };
    case RECEIVED: return {
      ...state,
      error: '',
      submitting: false,
      results: action.payload,
    };
    case REJECTED: return {
      ...state,
      submitting: false,
      error: String(action.payload),
    };
    default: return state;
  }
}

export default reducer;
