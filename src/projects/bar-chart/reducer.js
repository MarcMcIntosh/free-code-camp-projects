import {
  RECIEVE_DATA,
  RECIEVE_ERROR,
  REQUEST_DATA,
} from './actions';

const DEFAULT_STATE = {
  error: '',
  fetching: false,
  data: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA: return {
      ...state,
      data: false,
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
      error: action.payload,
      fetching: false,
    };
    default: return state;
  }
}

export default reducer;
