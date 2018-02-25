import {
  TOGGLE_MENU,
  REFRESH_REQUEST,
  REFRESH_RECIEVED,
  REFRESH_REJECTED,
  REGISTER_REQUEST,
  REGISTER_RECIEVED,
  REGISTER_REJECTED,
  LOGIN_REQUEST,
  LOGIN_REJECTED,
  LOGIN_RECIEVED,
  LOGOUT_REQUEST,
  LOGOUT_REJECTED,
  LOGOUT_RECIEVED,
  QUESTIONS_REQUEST,
  QUESTIONS_REJECTED,
  QUESTIONS_RECIEVED,
  CREATE_POLL_REQUEST,
  GET_POLL_REQUEST,
  GET_POLL_RECIEVED,
  GET_POLL_REJECTED,
} from './actions';

export const DEFAULT_STATE = {
  authenticated: false,
  fetching: false,
  menuIsOpen: false,
  username: '',
  id: '',
  questions: [],
  questionsAsked: [],
  // answers: {},
  // votes should be key value pairs of quesiton._id:answer._id;
  votes: {},

  poll: {
    _id: '',
    question: '',
    answers: [],
  },
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_MENU: return { ...state, menuIsOpen: !state.menuIsOpen };
    case QUESTIONS_RECIEVED: return { ...state, fetching: false, questions: action.payload };

    case QUESTIONS_REJECTED: return { ...state, fetching: false };
    case GET_POLL_RECIEVED: return { ...state, fetching: false, poll: action.payload };
    case GET_POLL_REJECTED: return { ...state, fetching: false };

    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case CREATE_POLL_REQUEST:
    case QUESTIONS_REQUEST:
    case GET_POLL_REQUEST:
    case REFRESH_REQUEST: return { ...state, fetching: true };

    case REGISTER_RECIEVED:
    case LOGIN_RECIEVED: return { ...state, authenticated: true, fetching: false };

    case REFRESH_RECIEVED: return { ...state, ...action.payload, authenticated: true, fetching: false };

    case REFRESH_REJECTED:
    case LOGOUT_REJECTED:
    case LOGOUT_RECIEVED: return { ...state, authenticated: false, fetching: false, username: '', id: '', answers: {} };

    case REGISTER_REJECTED:
    case LOGIN_REJECTED: return { ...state, fetching: false, authenticated: false };

    default: return state;
  }
}
