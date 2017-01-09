// import channels from './channels';
import {
  RECEIVE_ERROR,
  REQUEST_USER,
  RECEIVE_USER,
} from './actions';

const users = [
  'freecodecamp',
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas',
  'brunofin',
  'comster404',
].map(d => d.toLowerCase());

export const DEFAULT_STATE = {
  error: '',
  isFetching: false,
  channels: {},
  users,
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_USER: return {
      ...state,
      channels: {
        ...state.channels,
        [action.payload.user]: {
          ...state.channels[action.payload.user],
          isFetching: true,
        },
      },
    };
    case RECEIVE_ERROR: return {
      ...state,
      error: action.payload,
    };
    case RECEIVE_USER: return {
      ...state,
      channels: {
        ...state.channels,
        [action.payload.name]: {
          ...state.channels[action.payload.name],
          ...action.payload,
          isFetching: false,
        },
      },
    };
    default: return state;
  }
}
