import fetch from 'isomorphic-fetch';


export default function fetchWithCallback(address, cb) {
  fetch(address).then((res) => {
    if (res.status < 200 || res.status >= 300) {
      throw res.statusText;
    }
    return res.json();
  }).then(json => cb(null, json)).catch(err => cb(err));
}
