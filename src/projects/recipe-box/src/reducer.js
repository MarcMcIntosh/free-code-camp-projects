import cakeJson from './data/cake.json';
import {
  EDIT_CAKE,
  CANCEL_EDIT,
  UPDATE_CAKE,
  ADD_CAKE,
  SAVE_CAKE,
  REMOVE_CAKE,
  ACCEPT_COOKIE,
} from './actions';

const DEFAULT_STATE = {
  edit: -1,
  cookies: false,
  cakes: cakeJson,
  view: -1,
  adding: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case EDIT_CAKE: return {
      ...state,
      edit: action.payload,
      adding: false,
    };
    case CANCEL_EDIT: return {
      ...state,
      edit: -1,
      adding: false,
    };
    case ADD_CAKE: return {
      ...state,
      adding: true,
      edit: -1,
    };
    case UPDATE_CAKE: {
      const cakes = [...state.cakes];
      cakes.splice(state.edit, 1, action.payload);
      return { ...state, edit: -1, cakes };
    }
    case SAVE_CAKE: {
      const cakes = [action.payload, ...state.cakes];
      return { ...state, adding: false, edit: -1, cakes };
    }
    case REMOVE_CAKE: {
      const cakes = state.cakes.filter((d, i) => i !== action.payload);
      return { ...state, cakes };
    }
    case ACCEPT_COOKIE: return {
      ...state,
      cookies: true,
    };
    default: return state;
  }
}

export default reducer;
