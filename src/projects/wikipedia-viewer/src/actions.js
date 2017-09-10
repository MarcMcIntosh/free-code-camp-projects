import fetch from 'isomorphic-fetch';

export const REQUEST_WIKIS = 'REQUEST_WIKI';
export const RECEIVE_WIKIS = 'RECEIVE_WIKIS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CHANGE_TERM = 'CHANGE_TERM';

export function request() {
  return { type: REQUEST_WIKIS };
}
export function receiveWikis(payload) {
  return { type: RECEIVE_WIKIS, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}
export function changeTerm(payload) {
  return { type: CHANGE_TERM, payload };
}

const wikiUrl = str => [
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

export function searchWikipedia(term) {
  return dispatch => fetch(
    wikiUrl(term),
  ).then((res) => {
    if (res.status >= 200 && res.statusText < 300) {
      return res.json();
    } return dispatch(receiveError(res.statusText));
  }).then((json) => {
    const pages = json.query.pages;
    const results = Object.keys(pages).map(d => pages[d]).sort((a, b) => {
      const at = a.title.search(term);
      const bt = b.title.search(term);
      const ae = a.extract.search(term);
      const be = b.extract.search(term);
      if (at > bt) return -1;
      if (at < bt) return 1;
      if (ae > be) return -1;
      if (ae < be) return 1;
      return 0;
    });
    return dispatch(receiveWikis(results));
  });
}
