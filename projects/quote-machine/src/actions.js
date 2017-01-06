import fetch from 'isomorphic-fetch';

export const REQUEST_QUOTE = 'REQUEST_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const TWEET_QUOTE = 'TWEET_QUOTE';

export function requestQuote() {
  return { type: REQUEST_QUOTE };
}
export function receiveQuote(payload) {
  return { type: RECEIVE_QUOTE, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}

export function fetchQuote() {
  return (dispatch) => {
    dispatch(requestQuote());
    return fetch('https://andruxnet-random-famous-quotes.p.mashape.com', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'X-Mashape-Key': 'KCHzNgcQkvmshHt9J4y6rfSG7OMVp1lPU4xjsna1lsNQYtMtL0',
        Accept: 'application/json',
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } throw res.statusText;
    }).then(json => receiveQuote({
      author: json.author,
      quote: json.quote,
    })).catch(err => receiveError(err));
  };
}

export function tweetQuote(str) {
  // const twt = `https://twitter.com/intent/tweet?text=${str}`;
  const w = 550;
  const h = 420;
  const sh = screen.height;
  const sw = screen.width;
  const left = Math.round((sw / 2) - (w / 2));
  const top = (sh > h) ? Math.round((sh / 2) - (h / 2)) : 0;
  const opts = `text=${str},scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=${w},height=${h},left=${left},top=${top}`;

  window.open('https://twitter.com', 'intent', opts);
}
