import { REQUEST, RECIEVE, REJECT } from './actions';

export const DEFAULT_STATE = { error: '', fetching: false, data: [] };

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, error: '', fetching: true };
    case RECIEVE: return { ...state, data: action.payload, fetching: false };
    case REJECT: return { ...state, error: action.payload, fetching: false };
    default: return state;
  }
}
