import {
  RECIEVE_MTR_DATA,
  RECIEVE_GEO_DATA,
  RECIEVE_MTR_ERROR,
  RECIEVE_GEO_ERROR,
  REQUEST_MTR_DATA,
  REQUEST_GEO_DATA,
} from './actions';

const DEFAULT_STATE = {
  error_meteorites: '',
  fetching_meteorites: false,
  error_topology: '',
  fetching_topology: false,
  meteorites: {},
  topology: {},
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_MTR_DATA: return {
      ...state,
      meteorites: {},
      error_meteorites: '',
      fetching_meteorites: true,
    };
    case RECIEVE_MTR_DATA: return {
      ...state,
      meteorites: action.payload,
      error_meteorites: '',
      fetching_meteorites: false,
    };
    case RECIEVE_MTR_ERROR: return {
      ...state,
      meteorites: {},
      error_meteorites: action.payload,
      fetching_meteorites: false,
    };
    case REQUEST_GEO_DATA: return {
      ...state,
      topology: {},
      error_topology: '',
      fetching_topology: true,
    };
    case RECIEVE_GEO_DATA: return {
      ...state,
      topology: action.payload,
      error_topology: '',
      fetching_topology: false,
    };
    case RECIEVE_GEO_ERROR: return {
      ...state,
      topology: {},
      error_topology: action.payload,
      fetching_topology: false,
    };
    default: return state;
  }
}

export default reducer;
