import { REQUEST, RECEIVE, ERROR } from './actions';

export const DEFAULT_STATE = {
  error: '',
  isFetching: false,
  author: '',
  quote: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, error: '', isFetching: true };
    case RECEIVE: {
      const { author, quote } = action.payload;
      return { ...state, author, quote, isFetching: false };
    }
    case ERROR: return { ...state, isFetching: false, error: action.payload };
    default: return state;
  }
}

export default reducer;
