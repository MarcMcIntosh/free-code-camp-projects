import fetch from 'isomorphic-fetch';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const FETCHING_USERS = 'FETCHING_USERS';

export function requestUser(payload) {
  return { type: REQUEST_USER, payload };
}
export function receiveUser(payload) {
  return { type: RECEIVE_USER, payload };
}
export function receiveError(payload) {
  return { type: RECEIVE_ERROR, payload };
}

export function requestTwitchUserInfo(user) {
  const addr = `https://wind-bow.gomix.me/twitch-api/users/${user}`;

  return (dispatch) => {
    dispatch(requestUser({ user }));
    fetch(addr).then((res) => {
      if (res.status < 200 || res.status >= 300) {
        throw res.statusText;
      }
      return res.json();
    }).then((json) => {
      if (json.error) {
        const { error, message } = json;
        dispatch(receiveUser({ name: user, error, message }));
      } else {
        const { display_name, name, _id, bio, logo } = json;
        const payload = { name, _id, bio, logo, display_name };
        dispatch(receiveUser(payload));
      }
    }).catch(err => dispatch(receiveError(err)));
  };
}
/*
function fetchUser(user, cb) {
  const addr = `https://wind-bow.gomix.me/twitch-api/users/${user}`;

  fetch(addr).then((res) => {
    if (res.status < 200 || res.status >= 300) {
      throw res.statusText;
    }
    return res.json();
  }).then((json) => {
    if (json.error) {
      const { error, message } = json;
      cb(null, { error, message });
    } else {
      const { display_name, name, _id, bio, logo } = json;
      cb(null, { name, _id, bio, logo, display_name });
    }
  }).catch(err => cb(err));
}
*/
/* export function fetchUsers(users = [], num = 0) {
  return (dispatch) => {
    dispatch(fetchingUsers(true));
    if (num < users.length) {
      fetchUser(users[num], (err, user) => {
        if (err) {
          dispatch(receiveError(err));
        } else {
          dispatch(receiveUser(user));
        }
        return fetchUsers(users, num + 1);
      });
    } else {
      dispatch(fetchUsers(false));
    }
  };
}
*/

// Use https://wind-bow.gomix.me/twitch-api instead of https://api.twitch.tv/kraken
