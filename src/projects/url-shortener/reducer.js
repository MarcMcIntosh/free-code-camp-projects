import { REQUEST, RECEIVED, REJECTED } from './actions';

const has = (arr, o) => arr.reduce((a, b) => (a && a[b] ? a[b] : null), o);

export const DEFAULT_STATE = { fetching: true, result: '', error: '' };

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { result: '', error: '', fetching: true };
    case RECEIVED: {
      const result = has(['url'], action.payload) || '';
      return { result, fetching: false };
    }
    case REJECTED: {
      const error = (action.payload instanceof Error && action.payload.toString()) || has(['message'], action.payload) || '';
      return { fetching: false, error };
    }
    default: return state;
  }
}
