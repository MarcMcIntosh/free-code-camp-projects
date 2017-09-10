import {
  RECIEVE_DATA,
  RECIEVE_ERROR,
  REQUEST_DATA,
} from './actions';

import globalTempratureData from './data/global-temperature.json';

const DEFAULT_STATE = {
  error: false,
  fetching: false,
  data: globalTempratureData,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA: return {
      ...state,
      data: false,
      error: false,
      fetching: true,
    };
    case RECIEVE_DATA: return {
      ...state,
      data: action.payload,
      error: null,
      fetching: false,
    };
    case RECIEVE_ERROR: return {
      ...state,
      data: false,
      error: action.payload,
      fetching: false,
    };
    default: return state;
  }
}

export default reducer;
