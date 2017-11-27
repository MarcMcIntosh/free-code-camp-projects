import fetch from 'isomorphic-fetch';

const prefix = str => `LOCAL_WEATHER_${str}`;

export const SET_WATCH_ID = prefix('SET_WATCH_ID');
export const setWatchId = (payload = 0) => ({ type: SET_WATCH_ID, payload });

export const REQUEST_WEATHER = prefix('REQUEST_WEATHER');
export const RECEIVE_WEATHER = prefix('RECEIVE_WEATHER');
export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
export const CLIENT_ERROR = prefix('CLIENT_ERROR');
export const CLIENT_COORDS = prefix('CLIENT_COORDS');
export const REQUEST_COORDS = prefix('REQUEST_COORDS');
export const TOGGLE_TEMP = prefix('TOGGLE_TEMP');
// export const REQUEST_ICON = prefix('REQUEST_ICON');
// export const ICON_BLOB = prefix('ICON_BLOB');
// export const ICON_ERROR = prefix('ICON_ERROR');
// export const HAS_ICON = prefix('HAS_ICON');

export function requestWeather() {
  return { type: REQUEST_WEATHER };
}
export function requestCoords() {
  return { type: REQUEST_COORDS };
}

export function receiveWeather(payload) {
  // const report = payload.weather[0];
  console.log(payload);
  const { description, icon, main } = payload.weather[0];
  return {
    type: RECEIVE_WEATHER,
    payload: {
      icon,
      description,
      weather: main,
      temperature: payload.main.temp,
    },
  };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}
export function clientError(payload) {
  return { type: CLIENT_ERROR, payload };
}
export const clientCoords = ({
  coords: { latitude, longitude },
  timestamp,
}) => ({
  type: CLIENT_COORDS,
  payload: {
    latitude,
    longitude,
    timestamp,
    hasCoords: (typeof latitude === 'number' && typeof longitude === 'number'),
  },
});

export function setTempDisplay(payload) {
  return { type: TOGGLE_TEMP, payload };
}
export function toggleTemperature(curr) {
  const nxt = (curr === 'C') ? 'F' : 'C';
  return dispatch => dispatch(setTempDisplay(nxt));
}

export const geoError = ({ code, message, PERMISSION_DENIED, POSITION_UNAVAILABLE, TIMEOUT, UNKNOWN_ERROR }) => {
  switch (code) {
    case PERMISSION_DENIED: return clientError('User denied the request for Geolocation.');
    case POSITION_UNAVAILABLE: return clientError('Location information is unavailable.');
    case TIMEOUT: return clientError('The request to get user location timed out.');
    case UNKNOWN_ERROR: return clientError('An unknown error occurred.');
    default: return clientError(message);
  }
};

export const fetchWeather = ({ longitude, latitude, apiKey }) => (dispatch) => {
  const addr = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}`;
  dispatch(requestWeather());
  fetch(addr, { headers: { Accept: 'application/json' } }).then((res) => {
    if (!res.ok) { throw new Error(res.statusText); }
    return res.json();
  }).then(json => dispatch(receiveWeather(json))).catch(error => dispatch(receiveError(String(error))));
};

/*
const requestIcon = () => ({ type: REQUEST_ICON });
const iconBlob = payload => ({ type: ICON_BLOB, payload });
const iconError = payload => ({ type: ICON_ERROR, payload });
export const iconHasLoaded = () => dispatch => dispatch({ type: HAS_ICON });

export function getIcon(addr) {
  return (dispatch) => {
    dispatch(requestIcon());
    fetch(addr).then((res) => {
      if (res.ok) return res.blob();
      throw new Error(res.statusText);
    }).then(blob => dispatch(iconBlob(blob))).catch(error => dispatch(iconError(error)));
  };
}
*/
