import fetch from 'isomorphic-fetch';

const API_KEY = '8098f170d355d6b8099e49533b084a65';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLIENT_ERROR = 'CLIENT_ERROR';
export const CLIENT_COORDS = 'CLIENT_COORDS';
export const REQUEST_COORDS = 'REQUEST_COORDS';
export const TOGGLE_TEMP = 'TOGGLE_TEMP';
export const REQUEST_ICON = 'REQUEST_ICON';
export const ICON_BLOB = 'ICON_BLOB';
export const ICON_ERROR = 'ICON_ERROR';
export const HAS_ICON = 'HAS_ICON';

export function requestWeather() {
  return { type: REQUEST_WEATHER };
}
export function requestCoords() {
  return { type: REQUEST_COORDS };
}

const kelvinToCelsius = k => Math.round((k - 273.15) * 100) / 100;
const kelvinToFahrenheit = k => Math.round(((k * (9 / 5)) - 459.67) * 100) / 100;


export function receiveWeather(payload) {
  // const report = payload.weather[0];
  const { description, icon, main } = payload.weather[0];
  const { latitude, longitude } = payload.coord;
  return {
    type: RECEIVE_WEATHER,
    payload: {
      icon,
      description,
      latitude,
      longitude,
      weather: main,
      temperature: payload.main.temp,
      celsius: kelvinToCelsius(payload.main.temp),
      fahrenheit: kelvinToFahrenheit(payload.main.temp),
    },
  };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}
export function clientError(payload) {
  return { type: CLIENT_ERROR, payload };
}
export function clientCoords(payload) {
  return { type: CLIENT_COORDS, payload };
}

export function setTempDisplay(payload) {
  return { type: TOGGLE_TEMP, payload };
}
export function toggleTemperature(curr) {
  const nxt = (curr === 'C') ? 'F' : 'C';
  return dispatch => dispatch(setTempDisplay(nxt));
}


function getCoords(cb) {
  if ('geolocation' in navigator) {
    return navigator.geolocation.getCurrentPosition(
      (geo) => {
        const { longitude, latitude } = geo.coords;
        return cb(null, {
          longitude, latitude, ...geo.timestamp,
        });
      },
      error => cb(error),
    );
  }
  return cb('Sorry, looks like your browser doesn\'t support geolocation');
}

function apiUrl(lat, lon, id = API_KEY) {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${id}`;
}

export function getWeather() {
  return (dispatch) => {
    dispatch(requestCoords());
    getCoords((err, payload) => {
      if (err) {
        dispatch(clientError(err));
      } else {
        dispatch(clientCoords(payload));
        fetch(apiUrl(payload.latitude, payload.longitude), {
          headers: { Accept: 'application/json' },
        }).then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          } return dispatch(receiveError(res.statusText));
        }).then(json => dispatch(receiveWeather(json)));
      }
    });
  };
}

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
    })
    .then(blob => dispatch(iconBlob(blob)))
    .catch(error => dispatch(iconError(error)));
  };
}