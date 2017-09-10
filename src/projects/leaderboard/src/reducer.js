import {
  REQUEST_RECENT,
  REQUEST_ALLTIME,
  RECEIVE_ERROR,
  RECEIVE_ALLTIME,
  RECEIVE_RECENT,
  SET_SORT,
} from './actions';

const DEFAULT_STATE = {
  recent: [],
  alltime: [],
  data: [],
  errorRecent: '',
  errorAllTime: '',
  isFetchingRecent: false,
  isFetchingAllTime: false,
  display: 'recent',
  ascending: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_ALLTIME: return { ...state, isFetchingAllTime: true };
    case REQUEST_RECENT: return { ...state, isFetchingRecent: true };
    case RECEIVE_ALLTIME: return { ...state, isFetchingAllTime: false, alltime: action.payload };
    case RECEIVE_RECENT: return { ...state, isFetchingRecent: false, recent: action.payload };
    case RECEIVE_ERROR: return {
      ...state, ...action.payload,
    };
    case SET_SORT: return { ...state, display: action.payload };
    default: return state;
  }
}

export default reducer;
