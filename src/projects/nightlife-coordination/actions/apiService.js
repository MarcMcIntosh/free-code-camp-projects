import fetch from 'isomorphic-fetch';

export default function api(address, options) {
  const opts = Object.assign({}, { credentials: 'same-origin' }, options);
  const addr = '/api/nightlife-coordination/' + address.replace(/^\//, '');
  return fetch(addr, opts);
}
