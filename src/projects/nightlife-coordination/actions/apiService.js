import fetch from 'isomorphic-fetch';
import { stringify } from 'querystring';

export default function api(address, options) {
  const opts = Object.assign({}, { credentials: 'same-origin' }, options);
  const addr = '/api/nightlife-coordination/' + address.replace(/^\//, '');
  return fetch(addr, opts);
}

export function saveEvent(id) {
  const term = '/event/' + id;
  const options = { method: 'PUT' };
  return api(term, options);
}

export function deleteEvent(id) {
  const term = '/event/' + id;
  const options = { method: 'DELETE' };
  return api(term, options);
}

export function getEvent(id) {
  const term = '/event/' + id;
  const options = { method: 'GET' };
  return api(term, options);
}

export function geoSearch({ latitude, longitude } = {}) {
  const term = '/events?' + stringify({ latitude, longitude });
  const options = { method: 'GET' };
  return api(term, options);
}

export function locationSearch(location) {
  const term = '/events?' + stringify({ location });
  const options = { method: 'GET' };
  return api(term, options);
}
