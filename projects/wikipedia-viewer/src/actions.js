import fetch from 'isomorphic-fetch';
export const REQUEST_WIKIS = 'REQUEST_WIKI';
export const RECEIVE_WIKIS = 'RECEIVE_WIKIS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function request() {
  return { type: REQUEST_WIKIS };
}
export function receiveWikis(payload) {
  return { type: RECEIVE_WIKIS, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}
const wikiUrl = (str) => {
  return [
    'https://en.wikipedia.org/w/api.php?format=json',
    'action=query',
    'origin=*',
    'generator=search',
    'gsrnamespace=0',
    'prop=extracts',
    'exintro',
    'explaintext',
    'exsentences=1',
    'exlimit=max',
    `gsrsearch=${str}`,
  ].join('&');
};

export function searchWikipedia(term) {
  return dispatch => fetch(
    wikiUrl(term),
  ).then((res) => {
    if (res.status >= 200 && res.statusText < 300) {
      return res.json();
    } return dispatch(receiveError(res.statusText));
  }).then((json) => {
    const pages = json.query.pages;
    const results = Object.keys(pages).map(d => pages[d]);
    return dispatch(receiveWikis(results));
  });
}
