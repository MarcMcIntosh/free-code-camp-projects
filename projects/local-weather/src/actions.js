import fetch from 'isomorphic-fetch';

const API_KEY = '8098f170d355d6b8099e49533b084a65';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLIENT_ERROR = 'CLIENT_ERROR';
export const CLIENT_COORDS = 'CLIENT_COORDS';
export const REQUEST_COORDS = 'REQUEST_COORDS';

export function requestWeather() {
  return { type: REQUEST_WEATHER };
}
export function requestCoords() {
  return { type: REQUEST_COORDS };
}
export function receiveWeather(payload) {
  return { type: RECEIVE_WEATHER, payload };
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
      if (err) return dispatch(clientError(err));
      dispatch(clientCoords(payload));
      return fetch(apiUrl(payload.latitude, payload.longitude), {
        headers: { Accept: 'application/json' },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } throw res.statusText;
      }).then(json => dispatch(receiveWeather(json)),
      ).catch(error => dispatch(clientError(error)));
    });
  };
}
