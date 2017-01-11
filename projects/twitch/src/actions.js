import twitchUrl from './utils/twitch-url';
import fetchWithCallback from './utils/fetchWithCallback';
import errorImageUrl from './utils/error-image-url';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_STREAM = 'RECEIVE_STREAM';
export const REQUEST_USER = ' REQUEST_USER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export function receiveUser(payload) {
  return { type: RECEIVE_USER, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}
export function requestUser(payload) {
  return { type: REQUEST_USER, payload };
}
export function setDisplayTo(payload) {
  return { type: TOGGLE_FILTER, payload };
}
export function receiveStream(payload) {
  return { type: RECEIVE_STREAM, payload };
}


export function toggleDisplay(term) {
  return (dispatch) => {
    if (term === ('all' || 'online' || 'offline')) {
      dispatch(setDisplayTo(term));
    } else {
      dispatch(receiveError(`${term} is not a filter`));
    }
  };
}

function fetchChannel(name, cb) {
  const address = twitchUrl('channels', name);
  return setTimeout(fetchWithCallback(address, (err, channel) => {
    if (err) {
      return cb(receiveError(err));
    } else if (channel.error) {
      const { error, message } = channel;
      const logo = errorImageUrl('ERROR');
      return cb(receiveUser({ name, error, message, logo }));
    }
    const { display_name, logo, url, status } = channel;
    return cb(receiveUser({ name, logo, display_name, url, status }));
  }), 0);
}

function fetchStream(name, cb) {
  const address = twitchUrl('streams', name);
  return setTimeout(fetchWithCallback(address, (err, stream) => {
    if (err) {
      cb(receiveError(err));
    } else if (stream.stream) {
      cb(receiveStream({ name, isStreaming: true, game: stream.stream.game }));
    }
    cb();
  }), 0);
}

export function getUserData(users) {
  return (dispatch) => {
    users.forEach((user) => {
      dispatch(requestUser(user));
      fetchChannel(user, (channel) => {
        dispatch(channel);
        if (!channel.payload.error) {
          fetchStream(user, (stream) => {
            if (stream) dispatch(stream);
          });
        }
      });
    });
  };
}
