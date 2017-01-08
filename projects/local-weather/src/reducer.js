import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  RECEIVE_ERROR,
  CLIENT_ERROR,
  CLIENT_COORDS,
  REQUEST_COORDS,
  TOGGLE_TEMP,
} from './actions';

export const DEFAULT_STATE = {
  isFetching: false,
  hasCoords: false,
  isPermitting: false,
  success: false,
  latitude: null,
  longitude: null,
  timestamp: Date.now(),
  error: '',
  weather: '',
  icon: '',
  temperature: null,
  celsius: null,
  fahrenheit: null,
  degrees: 'C',
  description: '',
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_WEATHER: return {
      ...state, isFetching: true, error: null,
      // Include url or somthing?
    };
    case TOGGLE_TEMP: return { ...state, degrees: action.payload };
    case RECEIVE_WEATHER: return {
      ...state,
      ...action.payload,
      error: '',
      isFetching: false,
      success: true,
    };
    case RECEIVE_ERROR: return {
      ...state,
      isFetching: false,
      success: false,
      error: action.payload,
    };
    case CLIENT_ERROR: return {
      ...state, error: action.payload, isPermitting: false,
    };
    case REQUEST_COORDS: return {
      ...state, isPermitting: true,
    };
    case CLIENT_COORDS: {
      const { latitude, longitude, timestamp } = action.payload;
      return {
        ...state, latitude, longitude, timestamp, hasCoords: true, isPermitting: false,
      };
    }
    default: return state;
  }
}
