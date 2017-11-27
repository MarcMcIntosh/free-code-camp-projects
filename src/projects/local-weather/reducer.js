import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  RECEIVE_ERROR,
  CLIENT_ERROR,
  CLIENT_COORDS,
  REQUEST_COORDS,
  TOGGLE_TEMP,
  // REQUEST_ICON,
  // ICON_BLOB,
  // ICON_ERROR,
  // HAS_ICON,
  SET_WATCH_ID,
} from './actions';

export const DEFAULT_STATE = {
  watchId: 0,
  isFetching: false,
  hasCoords: false,
  isPermitting: false,
  success: false,
  latitude: Infinity,
  longitude: Infinity,
  timestamp: Date.now(),
  error: '',
  weather: '',
  icon: '',
  temperature: Infinity,
  celsius: Infinity,
  fahrenheit: Infinity,
  degrees: 'C',
  description: '',
  // loadingIcon: false,
  // iconLoaded: false,
  // iconBlob: '',
  // iconError: '',
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_WATCH_ID: return { ...state, watchId: action.payload };
    case REQUEST_WEATHER: return {
      ...state, isFetching: true, error: '',
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
    case CLIENT_COORDS: return {
      ...state, ...action.payload, isPermitting: false,
    };
    /*
    case REQUEST_ICON: return { ...state, loadingIcon: true };
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
    }; */

    default: return state;
  }
}
