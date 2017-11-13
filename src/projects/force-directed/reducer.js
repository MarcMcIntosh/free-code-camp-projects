import {
  RECIEVE_DATA,
  RECIEVE_ERROR,
  REQUEST_DATA,
  RECIEVE_FLAGS,
  REQUEST_FLAGS,
} from './actions';

export const DEFAULT_STATE = {
  error: '',
  fetching_data: false,
  fetching_flags: false,
  data: {},
  flags: [],
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA: return {
      ...state,
      error: '',
      fetching_data: true,
    };
    case RECIEVE_DATA: return {
      ...state,
      data: action.payload,
      fetching_data: false,
    };
    case RECIEVE_ERROR: return {
      ...state,
      error: action.payload,
    };
    case RECIEVE_FLAGS: return {
      ...state,
      fetching_flags: false,
      flags: action.payload,
    };
    case REQUEST_FLAGS: return {
      ...state,
      error: '',
      fetching_flags: true,
    };
    default: return state;
  }
}

export default reducer;
