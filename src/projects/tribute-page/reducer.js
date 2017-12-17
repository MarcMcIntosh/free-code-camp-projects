import { SET_SRC, ON_LOAD, ON_ERROR } from './actions';

export const DEFAULT_STATE = {
  loading: false,
  loaded: false,
  src: '',
  error: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_SRC: return { ...state, loading: true, src: action.payload, timer: 0 };
    case ON_LOAD: return { ...state, loading: false, loaded: true };
    case ON_ERROR: return { ...state, loading: false, loaded: false, error: action.payload };
    default: return state;
  }
}

export default reducer;
