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
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case EDIT_CAKE:
    case CANCEL_EDIT:
    case UPDATE_CAKE:
    case ADD_CAKE:
    case SAVE_CAKE:
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
