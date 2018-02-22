import {
  REQUEST_QUESTIONS,
  RECIEVED_QUESTIONS,
  REQUEST_POLL,
  RECIEVED_POLL,
  REJECTED,
  REQUEST_USER,
  RECIEVED_USER,
  REJECTED_USER,
  REMOVE_USER,
  TOGGLE_MENU,
} from './actions';

export const DEFAULT_STATE = {
  authenticated: false,
  fetching: false,
  poll: {},
  questions: [],
  error: '',
  user: {},
  menuIsOpen: false,
  // redirectTo: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS: return { ...state, fetching: true, error: '', questions: [] };
    case REQUEST_USER: return {
      ...state,
      fetching: true,
      error: '',
    };
    case REQUEST_POLL: return { ...state, fetching: true, error: '', poll: {} };
    case TOGGLE_MENU: return { ...state, menuIsOpen: !state.menuIsOpen };

    case RECIEVED_POLL: return { ...state, fetching: false, error: '', poll: action.payload };
    case RECIEVED_QUESTIONS: return { ...state, fetching: false, questions: action.payload };
    case RECIEVED_USER: return {
      ...state,
      fetching: false,
      authenticated: true,
      user: { ...state.user, ...action.payload.data },
    };

    case REJECTED:
    case REJECTED_USER: return {
      ...state,
      fetching: false,
      error: action.payload.message || action.payload.toString() || '',
      user: { ...state.user },
    };

    case REMOVE_USER: return {
      ...state,
      authenticated: false,
      user: {},
    };
    default: return state;
  }
}
