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
  switch (action.type) {
    case REHYDRATE: {
      const { recipes } = action.payload.recipeBox || state;
      return { ...state, recipes };
    }
    case READ: return {
      ...state,
      reading: action.payload,
    };
    case CREATE: return {
      ...state,
      editting: action.payload,
    };
    case UPDATE: {
      if (action.payload.index === -1) {
        return {
          ...state,
          recipes: [].concat(action.payload.values, state.recipes),
          editting: false,
        };
      }
      const recipes = state.recipes.slice(0);
      recipes.splice(action.payload.index, 1, action.payload.values);
      return { ...state, recipes, editting: false };
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
