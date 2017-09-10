import {
  RECIEVE_MTR_DATA,
  RECIEVE_GEO_DATA,
  RECIEVE_MTR_ERROR,
  RECIEVE_GEO_ERROR,
  REQUEST_MTR_DATA,
  REQUEST_GEO_DATA,
} from './actions';

// import countries from './data/countries.json';
import {
  GEO_DATA,
  MTR_DATA,
} from './constants';

const DEFAULT_STATE = {
  error_meteorites: false,
  fetching_meteories: false,
  error_topology: false,
  fetching_topology: false,
  meteorites: MTR_DATA,
  topology: GEO_DATA,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_MTR_DATA: return {
      ...state,
      meteorites: false,
      error_meteorites: false,
      fetching_meteories: true,
    };
    case RECIEVE_MTR_DATA: return {
      ...state,
      meteorites: action.payload,
      error_meteorites: null,
      fetching_meteories: false,
    };
    case RECIEVE_MTR_ERROR: return {
      ...state,
      topology: false,
      error_meteorites: action.payload,
      fetching_meteories: false,
    };
    case REQUEST_GEO_DATA: return {
      ...state,
      topology: false,
      error_topology: false,
      fetching_topology: true,
    };
    case RECIEVE_GEO_DATA: return {
      ...state,
      meteorites: action.payload,
      error_topology: null,
      fetching_topology: false,
    };
    case RECIEVE_GEO_ERROR: return {
      ...state,
      topology: false,
      error_topology: action.payload,
      fetching_topology: false,
    };
    default: return state;
  }
}

export default reducer;