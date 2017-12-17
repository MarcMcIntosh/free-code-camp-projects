import twitchUrl from './utils/twitch-url';
import errorImageUrl from './utils/error-image-url';

const prefix = str => `TWITCH-TV_${str}`;

// export const REQUEST = prefix('REQUEST');
// export const RECEIVED = prefix('RECEIVE');
// export const REJECTED = prefix('REJECTED');

export const RECEIVE_USER = prefix('RECEIVE_USER');
export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
export const RECEIVE_STREAM = prefix('RECEIVE_STREAM');
export const REQUEST_USER = prefix('REQUEST_USER');
export const TOGGLE_FILTER = prefix('TOGGLE_FILTER');

export const receiveUser = payload => ({ type: RECEIVE_USER, payload });

export const receiveError = payload => ({ type: RECEIVE_ERROR, payload });

export const requestUser = payload => ({ type: REQUEST_USER, payload });

export const setDisplayTo = payload => ({ type: TOGGLE_FILTER, payload });

export const receiveStream = payload => ({ type: RECEIVE_STREAM, payload });

export const toggleDisplay = term => (dispatch) => {
  switch (term) {
    case 'all':
    case 'online':
    case 'offline': dispatch(setDisplayTo(term)); break;
    default: dispatch(receiveError(`${term} is not a filter`));
  }
};

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
