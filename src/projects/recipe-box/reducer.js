import { REHYDRATE } from 'redux-persist/constants';
import {
  CREATE,
  READ,
  UPDATE,
  DELETE,
  SET_VIEW,
  TOGGLE_EDIT,
  // REFRESH,
  ERROR,
} from './actions';

const DEFAULT_STATE = {
  active: '',
  recipes: {},
  edit: false,
  error: '',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REHYDRATE: return { ...state, ...action.payload };
    case READ: return { ...state, active: action.payload };
    case SET_VIEW: return { ...state, active: action.payload };
    case TOGGLE_EDIT: return { ...state, edit: !state.edit };
    case ERROR: return { ...state, error: action.payload };
    case CREATE:
    case UPDATE: {
      const recipes = {
        ...state.recipes,
        [action.payload._id]: action.payload,
      };
      return { ...state, recipes };
    }
    case DELETE: {
      const recipes = Object.keys(state.recipes).filter(d => (d !== action.payload)).reduce((a, b) => ({ ...a, [b]: state.recipes[b] }), {});
      return { ...state, recipes };
    }

    default: return state;
  }
}

export default reducer;
