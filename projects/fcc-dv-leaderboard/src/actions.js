import fetch from 'isomorphic-fetch';

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
const receiveError = payload => ({
  type: RECEIVE_ERROR,
  payload,
});

export const REQUEST_RECENT = 'REQUEST_RECENT';
export const RECEIVE_RECENT = 'RECEIVE_RECENT';
const requsetRecent = () => ({ type: REQUEST_RECENT });
const receiveRecent = payload => ({ type: RECEIVE_RECENT, payload });

export const REQUEST_ALLTIME = 'REQUEST_ALLTIME';
export const RECEIVE_ALLTIME = 'RECEIVE_ALLTIME';
const requestAllTime = () => ({ type: REQUEST_ALLTIME });
const receiveAllTime = payload => ({ type: RECEIVE_ALLTIME, payload });

export const TOGGLE_DISPLAY = 'TOGGLE_DISPLAY';
export const toggleDisplay = () => (dispatch, getState) => ({
  type: TOGGLE_DISPLAY,
  payload: {
    display: (getState().display === 'recent') ? 'alltime' : 'recent',
  },
});

export const TOGGLE_SORT = 'TOGGLE_SORT';
export const toggleSort = () => (dispatch, getState) => ({
  type: TOGGLE_SORT,
  payload: { ascending: !getState().ascending },
});

const addr = str => `https://fcctop100.herokuapp.com/api/fccusers/top/${str}`;
export function getData() {
  const alltime = addr('alltime');
  const recent = addr('recent');
  return (dispatch) => {
    dispatch(requsetRecent());
    fetch(recent).then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    }).then((json) => {
      dispatch(receiveRecent(json));
    }).catch((recentError) => {
      dispatch(receiveError({
        recentError,
        isFetchingRecent: false,
      }));
    });

    dispatch(requestAllTime());
    fetch(alltime).then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    }).then((json) => {
      dispatch(receiveAllTime(json));
    }).catch((errorAllTime) => {
      dispatch(receiveError({
        errorAllTime,
        isFetchingAllTime: false,
      }));
    });
  };
}
