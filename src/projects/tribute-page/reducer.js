import {
  SET_TIMER,
  SET_SRC,
} from './actions';

export const DEFAULT_STATE = {
  timer: 0,
  loading: false,
  src: '',
  duration: 3000,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TIMER: return {
      ...state,
      loading: true,
      timer: action.payload,
    };
    case SET_SRC: return {
      ...state,
      loading: false,
      src: action.payload,
      timer: 0,
    };
    default: return state;
  }
}

export default reducer;
