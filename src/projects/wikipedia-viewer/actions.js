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
  'exsentences=3',
  'exlimit=max',
  `gsrsearch=${str}`,
].join('&');

export const ON_CHANGE = prefix('ON_CHANGE');
export const onChange = payload => ({ type: ON_CHANGE, payload });

export const ON_FOCUS = prefix('ON_FOCUS');
export const onFocus = () => ({ type: ON_FOCUS });
export const ON_BLUR = prefix('ON_BLUR');
export const onBlur = () => ({ type: ON_BLUR });
export const REQUESTS = prefix('REQUESTS');
export const RECEIVED = prefix('RECEIVED');
export const REJECTED = prefix('REJECTED');

export const requests = payload => ({ type: REQUESTS, payload });

export const received = payload => ({ type: RECEIVED, payload });

export const rejected = payload => ({ type: REJECTED, payload });

// function reduceEntries(a, [k, v]) { return { ...a, [k]: v }; }

function lengthOrZero(arr) { return Array.isArray(arr) ? arr.length : 0; }

function sortResults(arr, str) {
  const re = new RegExp(str, 'igm');
  const payload = arr.sort((a, b) => {
    const a0 = lengthOrZero(a.title.match(re));
    const b0 = lengthOrZero(b.title.match(re));
    const a1 = lengthOrZero(a.extract.match(re));
    const b1 = lengthOrZero(b.extract.match(re));
    return b0 - a0 || b1 - a1;
  });
  return payload;
}

export const onSubmit = payload => (dispatch) => {
  if (!payload) return dispatch(rejected('Required'));
  const url = wikiUrl(payload);
  dispatch(requests(url));
  return fetch(url).then((res) => {
    if (!res.ok) { throw new Error(res.statusText); }
    return res.json();
  }).then(({ query }) => {
    if (!query) { throw new Error('No results found'); }
    return query;
  }).then(({ pages }) => Object.values(pages))
    .then(pages => sortResults(pages, payload))
    .then(results => dispatch(received(results)))
    .catch(error => dispatch(rejected(error)));
};
