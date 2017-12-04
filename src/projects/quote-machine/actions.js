import fetch from 'isomorphic-fetch';

const prefix = str => `QUOTE-MACHINE_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVE = prefix('RECEIVE');
export const ERROR = prefix('ERROR');
export const QUOTE = prefix('TWEET');

export const request = () => ({ type: REQUEST });

export const receive = payload => ({ type: RECEIVE, payload });

export const handleError = payload => ({ type: ERROR, payload });

const MASHAPE = 'https://andruxnet-random-famous-quotes.p.mashape.com';
const API_KEY = 'KCHzNgcQkvmshHt9J4y6rfSG7OMVp1lPU4xjsna1lsNQYtMtL0';

export const fetchQuote = (api = MASHAPE, key = API_KEY) => (dispatch) => {
  const headers = { 'Content-type': 'application/x-www-form-urlencoded', 'X-Mashape-Key': key, Accept: 'application/json' };
  const method = 'POST';
  dispatch(request());
  return fetch(api, { method, headers }).then((res) => { if (!res.ok) { throw new Error(res.statusText); } return res.json(); }).then(json => dispatch(receive(json))).catch(err => dispatch(handleError(err.toString())));
};

export function tweetQuote(str) {
  const url = `https://twitter.com/intent/tweet?text=${str}`;
  const [w, h, sh, sw] = [550, 420, screen.height, screen.width];
  const left = Math.round((sw / 2) - (w / 2));
  const top = (sh > h) ? Math.round((sh / 2) - (h / 2)) : 0;
  const opts = `scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=${w},height=${h},left=${left},top=${top}`;

  return (dispatch) => {
    dispatch({ type: QUOTE });
    window.open(url, 'intent', opts);
  };
}
