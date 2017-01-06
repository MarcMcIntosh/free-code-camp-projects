import {
  REQUEST_QUOTE,
  RECEIVE_QUOTE,
  RECEIVE_ERROR,
  TWEET_QUOTE,
} from './actions'

const defaultState = {
  error: null,
  isFetching: false,
  loaded: false,
  author: '',
  quote: '',
};

function reducer(state = defaultState, action) {
  switch (action.type) {

    case REQUEST_QUOTE: return {
      ...state,
      error: null,
      isFetching: true,
      done: false,
    };

    case RECEIVE_QUOTE: {
      const [author, quote] = action.payload;
      return { ...state, author, quote, done: true };
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
