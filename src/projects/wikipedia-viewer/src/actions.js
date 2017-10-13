import fetch from 'isomorphic-fetch';

const prefix = str => `WIKIPEDIA-VIEWER_${str}`;
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

export const REQUEST_WIKIS = prefix('REQUEST_WIKI');
export const RECEIVE_WIKIS = prefix('RECEIVE_WIKIS');
export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
// export const CHANGE_TERM = prefix('CHANGE_TERM');

export const request = () => ({ type: REQUEST_WIKIS });

export const receiveWikis = payload => ({ type: RECEIVE_WIKIS, payload });

export const receiveError = payload => ({ type: RECEIVE_ERROR, payload });

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
