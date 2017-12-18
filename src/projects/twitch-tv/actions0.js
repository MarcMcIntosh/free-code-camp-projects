// import twitchUrl from './utils/twitch-url';
// import errorImageUrl from './utils/error-image-url';

const prefix = str => `TWITCH-TV_${str}`;

export const REQUEST = prefix('REQUEST');
export const RECEIVE = prefix('RECEIVE');
export const REJECT = prefix('REJECTED');

export const request = payload => ({ type: REQUEST, payload });
export const receive = payload => ({ type: RECEIVE, payload });
export const reject = payload => ({ type: REJECT, payload });

// export const RECEIVE_USER = prefix('RECEIVE_USER');
// export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
// export const RECEIVE_STREAM = prefix('RECEIVE_STREAM');
// export const REQUEST_USER = prefix('REQUEST_USER');
export const TOGGLE_FILTER = prefix('TOGGLE_FILTER');

// export const receiveUser = payload => ({ type: RECEIVE_USER, payload });

// export const receiveError = payload => ({ type: RECEIVE_ERROR, payload });

// export const requestUser = payload => ({ type: REQUEST_USER, payload });

export const setDisplayTo = payload => ({ type: TOGGLE_FILTER, payload });

// export const receiveStream = payload => ({ type: RECEIVE_STREAM, payload });

export const toggleDisplay = term => (dispatch) => {
  switch (term) {
    case 'all':
    case 'online':
    case 'offline': dispatch(setDisplayTo(term)); break;
    default: dispatch(reject(`${term} is not a filter`));
  }
};

const twitchUrl = (path, name) => `https://wind-bow.glitch.me/twitch-api/${path}/${name}`;
const twitchChannel = name => twitchUrl('channels', name);
const twitchStream = name => twitchUrl('streams', name);
const userUrls = (names) => {
  const channels = names.map(name => ({ name, url: twitchChannel(name) }));
  const streams = names.map(name => ({ name, url: twitchStream(name) }));
  return [].concat(channels, streams);
};
/*
const onResponse = (res) => {
  console.log(res);
  if (!res.ok) { throw new Error(res.statusText); }
  return res.json();
};
export const getUserData = users => dispatch => userUrls(users).forEach((user) => {
  const { name, url } = user;
  dispatch(request(user));
  fetch(url).then(onResponse).then((json) => {
    const payload = { [name]: json };
    return dispatch(received(payload));
  }).catch((error) => {
    const payload = { [name]: { error } };
    return dispatch(rejected(payload));
  });
});
*/

export const fetchUsers = users => (dispatch) => {
  const promises = userUrls(users).map((user) => {
    const { name, url } = user;
    return fetch(url).then((res) => {
      if (!res.ok) { throw new Error(res.statusText); }
      return res.json();
    }).then(json => ({ name, ...json })).catch(error => ({ name, error }));
  });
  dispatch(request(promises));
  Promise.all(promises).then((arr) => {
    const payload = arr.reduce((a, b) => {
      const key = b.name;
      const val = Object.assign({}, a[key], b);
      return { ...a, [key]: val };
    }, {});
    dispatch(receive(payload));
  }).catch(error => dispatch(reject(error)));
};
/*
export const getUserData = users => (dispatch) => {
  users.forEach((name) => {
    const channel = twitchUrl('channels', name);
    const stream = twitchUrl('streams', name);
    dispatch(requestUser(name));
    fetch(channel).then((res) => {
      if (!res.ok) throw res.statusText;
      return res.json();
    }).then((json) => {
      if (json.error) {
        const { error, message } = json;
        const logo = errorImageUrl('ERROR');
        dispatch(receiveUser({ name, error, message, logo }));
      } else {
        const { display_name, logo, url, status } = json;
        dispatch(receiveUser({ name, display_name, logo, url, status }));
      }
    }).catch(err => dispatch(receiveError(err)));

    fetch(stream).then((res) => {
      if (!res.ok) throw res.statusText;
      return res.json();
    }).then((json) => {
      if (json.stream) {
        dispatch(receiveStream({ name, isStreaming: true, game: json.stream.game }));
      }
    }).catch(err => dispatch(receiveError(err)));
  });
};
*/
