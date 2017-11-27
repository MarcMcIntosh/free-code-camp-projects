import fetch from 'isomorphic-fetch';

const prefix = str => `LOCAL-WEATHER_${str}`;

export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
export const receiveError = payload => ({ type: RECEIVE_ERROR, payload });

export const CLIENT_ERROR = prefix('CLIENT_ERROR');
export const clientError = payload => ({ type: CLIENT_ERROR, payload });

export const REQUEST_WEATHER = prefix('REQUEST_WEATHER');
export const requestWeather = () => ({ type: REQUEST_WEATHER });

export const REQUEST_COORDS = prefix('REQUEST_COORDS');
export const requestCoords = () => ({ type: REQUEST_COORDS });

export const SET_WATCH_ID = prefix('SET_WATCH_ID');
export const setWatchId = (payload = 0) => ({ type: SET_WATCH_ID, payload });

export const TOGGLE_TEMP = prefix('TOGGLE_TEMP');
export const toggleTemperature = payload => ({
  type: TOGGLE_TEMP,
  payload: (payload === 'C') ? 'F' : 'C',
});

export const RECEIVE_WEATHER = prefix('RECEIVE_WEATHER');
export const receiveWeather = ({
  dt,
  coord,
  name,
  sys: { country },
  main: { humidity, pressure, temp },
  weather: [{ description, icon, main }],
}) => ({
  type: RECEIVE_WEATHER,
  payload: { icon, description, weather: main, temperature: temp, details: { dt, coord, humidity, country, name, pressure } },
});

export const CLIENT_COORDS = prefix('CLIENT_COORDS');
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
