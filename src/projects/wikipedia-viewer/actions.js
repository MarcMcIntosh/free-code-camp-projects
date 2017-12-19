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

export const REQUESTS = prefix('REQUESTS');
export const RECEIVED = prefix('RECEIVE_WIKIS');
export const REJECTED = prefix('REJECTED');

export const requests = payload => ({ type: REQUESTS, payload });

export const received = payload => ({ type: RECEIVED, payload });

export const rejected = payload => ({ type: REJECTED, payload });

function reduceEntries(a, [k, v]) { return { ...a, [k]: v }; }

export const searchWikipedia = payload => (dispatch) => {
  const url = wikiUrl(payload);
  const sortResults = ([, { ...a }], [, { ...b }]) => {
    const at = a.title.search(payload);
    const bt = b.title.search(payload);
    const ae = a.extract.search(payload);
    const be = b.extract.search(payload);
    return -(at > bt) || +(at < bt) || -(ae > be) || (ae < be) || 0;
  };

  dispatch(requests(url));
  return fetch(url).then((res) => {
    if (!res.ok) { throw new Error(res.statusText); }
    return res.json();
  }).then(({ query: { pages } }) => Object.entries(pages))
    .then(pages => pages.sort(sortResults))
    .then(arr => arr.reduce(reduceEntries, {}))
    .then(results => dispatch(received(results)))
    .catch(error => dispatch(rejected(error)));
};
