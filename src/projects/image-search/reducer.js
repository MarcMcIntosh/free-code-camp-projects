import { REQUEST, RECEIVED, REJECTED, SET_TERM, SET_OFFSET, GET_LATEST } from './actions';

const getVal = (arr, o) => arr.reduce((a, b) => (a && a[b] ? a[b] : null), o);

export const DEFAULT_STATE = {
  fetching: false,
  formattedTotalResults: '',
  totalResults: 0,
  error: '',
  term: '',
  items: [],
  recent: [],
  offset: 1,
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TERM: return { ...state, term: action.payload, items: [], recent: [], formattedTotalResults: '', offset: 1, totalResults: 0 };
    case GET_LATEST: return { ...state, fetching: false, recent: action.payload };
    case REQUEST: return { ...state, fetching: true, recent: [] };
    case RECEIVED: {
      const formattedTotalResults = getVal(['searchInformation', 'formattedTotalResults'], action.payload) || '';
      const totalResults = getVal(['searchInformation', 'totalResults'], action.payload) || 0;
      const items = getVal(['items'], action.payload) || [];
      return { ...state, fetching: false, formattedTotalResults, totalResults: +totalResults, items: state.items.concat(items) };
    }
    case SET_OFFSET: return { ...state, offset: +action.payload || 1 };
    case REJECTED: return { ...state, error: action.payload.toString(), fetching: false };
    default: return state;
  }
}
