import fetch from 'isomorphic-fetch';

export default function fetchSession(address, options) {
  const opts = Object.assign({}, { credentials: 'same-origin' }, options);
  const addr = '/api/voting-app/' + address.replace(/^\//, '');
  return fetch(addr, opts);
}
