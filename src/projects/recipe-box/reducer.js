import { REHYDRATE } from 'redux-persist/constants';
import defaultRecipes from './data/recipes.json';

import {
  CREATE,
  READ,
  UPDATE,
  DELETE,
} from './actions';

const DEFAULT_STATE = {
  recipes: defaultRecipes,
  reading: -1,
  editting: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.payload) {
    case REHYDRATE: return {
      ...state,
      recipes: action.payload.recipes,
    };
    case READ: return {
      ...state,
      reading: +action.payload,
    };
    case CREATE: return {
      ...state,
      editting: action.payload,
    };
    case UPDATE: {
      /* use this as onSubmit */
      const recipes = state.recipes.slice(0);
      recipes[action.payload.index] = action.payload.values;
      return {
        ...state,
        recipes,
        editting: false,
      };
    }
    case DELETE: {
      const recipes = state.recipes.filter((d, i) => (i !== action.payload));
      return {
        ...state,
        recipes,
        reading: state.reading - 1,
        editting: false,
      };
    }
    default: return state;
  }
}

export default reducer;
