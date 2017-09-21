import {
  RECIEVE_DATA,
  RECIEVE_ERROR,
  REQUEST_DATA,
} from './actions';

const DEFAULT_STATE = {
  error: '',
  fetching: false,
  data: null,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA: return {
      ...state,
      data: null,
      error: '',
      fetching: true,
    };
    case RECIEVE_DATA: return {
      ...state,
      data: action.payload,
      error: '',
      fetching: false,
    };
    case RECIEVE_ERROR: return {
      ...state,
      data: null,
      error: action.payload,
      fetching: false,
    };
    default: return state;
  }
}

export default reducer;
