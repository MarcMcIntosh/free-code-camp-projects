import {
  REQUEST_QUOTE,
  RECEIVE_QUOTE,
  RECEIVE_ERROR,
} from './actions';

export const DEFAULT_STATE = {
  error: null,
  isFetching: false,
  done: false,
  author: '',
  quote: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case REQUEST_QUOTE: return {
      ...state,
      error: null,
      isFetching: true,
      done: false,
    };
    case RECEIVE_QUOTE: {
      const { author, quote } = action.payload;
      return { ...state, author, quote, done: true, isFetching: false };
    }
    case RECEIVE_ERROR: return {
      ...state,
      isFetching: false,
      done: true,
      error: action.payload,
    };
    default: return state;
  }
}

export default reducer;
