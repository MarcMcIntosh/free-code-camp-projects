// import twitchUrl from './utils/twitch-url';
// import errorImageUrl from './utils/error-image-url';

const prefix = str => `TWITCH-TV_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVE = prefix('RECEIVE');
export const REJECT = prefix('REJECTED');

export const request = payload => ({ type: REQUEST, payload });
export const receive = payload => ({ type: RECEIVE, payload });
export const reject = payload => ({ type: REJECT, payload });

export const TOGGLE_FILTER = prefix('TOGGLE_FILTER');

export const setDisplayTo = payload => ({ type: TOGGLE_FILTER, payload });

export const toggleDisplay = (term) => {
  switch (term) {
    case 'all':
    case 'online':
    case 'offline': return setDisplayTo(term);
    default: return setDisplayTo('all');
  }
};

const userReducer = arr => [].concat(arr).reduce((a, b) => (Object.prototype.hasOwnProperty.call(a, b.name) ? ({ ...a,
  [b.name]: { ...a[b.name], ...b },
}) : ({ ...a, [b.name]: b })), {});

export const fetchUsers = userUrls => (dispatch) => {
  const promises = userUrls.map(({ name, url }) => fetch(url).then(res => res.json()).then(json => ({ ...json, name })));

  dispatch(request(userUrls));

  Promise.all(promises).then(userReducer).then(payload => dispatch(receive(payload))).catch(error => dispatch(reject(error)));
};
