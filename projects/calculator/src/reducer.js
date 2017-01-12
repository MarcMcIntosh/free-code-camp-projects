import {
  SET_DISPLAY,
  CALC_ERROR,
  SET_ANSWER,
} from './actions';

const DEFAULT_STATE = {
  display: '',
  answer: null,
  error: null,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_DISPLAY: return { ...state, display: action.payload };
    case SET_ANSWER: return {
      ...state,
      display: action.payload,
      answer: action.payload,
    };
    case CALC_ERROR: return { ...state, error: action.payload };
    default: return state;
  }
}

export default reducer;
