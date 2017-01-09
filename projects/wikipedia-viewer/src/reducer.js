import {
  REQUEST_WIKIS,
  RECEIVE_WIKIS,
  RECEIVE_ERROR,
  CHANGE_TERM,
} from './actions';

const DEFAULT_STATE = {
  isFetching: false,
  results: [],
  term: '',
  error: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHANGE_TERM: return {
      ...state,
      term: action.payload,
    };
    case REQUEST_WIKIS: return { ...state, isFetching: true };
    case RECEIVE_WIKIS: return {
      ...state,
      error: '',
      isFetching: false,
      results: action.payload,
    };
    case RECEIVE_ERROR: return {
      ...state,
      isFetching: false,
      error: action.payload,
    };
    default: return state;
  }
}

export default reducer;
