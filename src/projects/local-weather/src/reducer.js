import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  RECEIVE_ERROR,
  CLIENT_ERROR,
  CLIENT_COORDS,
  REQUEST_COORDS,
  TOGGLE_TEMP,
  REQUEST_ICON,
  ICON_BLOB,
  ICON_ERROR,
  HAS_ICON,
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
  loadingIcon: false,
  iconLoaded: false,
  iconBlob: '',
  iconError: '',
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
    case REQUEST_ICON: return {
      ...state,
      loadingIcon: true,
    };
    case ICON_BLOB: return {
      ...state,
      loadingIcon: false,
      iconBlob: action.payload,
    };
    case ICON_ERROR: return {
      ...state,
      loadingIcon: false,
      iconError: action.payload,
    };
    case HAS_ICON: return {
      ...state,
      iconLoaded: true,
    };

    default: return state;
  }
}
