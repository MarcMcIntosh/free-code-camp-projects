import fetch from 'isomorphic-fetch';

const prefix = str => `LEADERBOARD_${str}`;

export const RECEIVE_ERROR = prefix('RECEIVE_ERROR');
const receiveError = payload => ({
  type: RECEIVE_ERROR,
  payload,
});

export const REQUEST_RECENT = prefix('REQUEST_RECENT');
export const RECEIVE_RECENT = prefix('RECEIVE_RECENT');
const requsetRecent = () => ({ type: REQUEST_RECENT });
const receiveRecent = payload => ({ type: RECEIVE_RECENT, payload });

export const REQUEST_ALLTIME = prefix('REQUEST_ALLTIME');
export const RECEIVE_ALLTIME = prefix('RECEIVE_ALLTIME');
const requestAllTime = () => ({ type: REQUEST_ALLTIME });
const receiveAllTime = payload => ({ type: RECEIVE_ALLTIME, payload });

export const TOGGLE_ORDER = prefix('TOGGLE_ORDER');
export const toggleOrder = () => ({
  type: TOGGLE_ORDER,
});

export const SET_SORT = prefix('SET_SORT');
export const setSort = payload => ({
  type: SET_SORT,
  payload,
});

const addr = str => `https://fcctop100.herokuapp.com/api/fccusers/top/${str}`;
export function getData() {
  const alltime = addr('alltime');
  const recent = addr('recent');
  return (dispatch) => {
    dispatch(requsetRecent());
    fetch(recent)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(json => dispatch(receiveRecent(json)))
      .catch(error => dispatch(receiveError({ error, isFetchingRecent: false })));

    dispatch(requestAllTime());
    fetch(alltime).then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
      .then(json => dispatch(receiveAllTime(json)))
      .catch(error => dispatch(receiveError({ error, isFetchingAllTime: false })));
  };
}
