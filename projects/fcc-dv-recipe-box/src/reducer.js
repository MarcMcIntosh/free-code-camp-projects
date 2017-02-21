import {
  ACKNOWLEDGE_COOKIES,
  RECIPE_ADD,
  RECIPE_EDIT,
} from './actions';

const DEFAULT_STATE = {
  active: -1,
  recipes: [],
  cookies: false,
  edit: false,
};

function reducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case RECIPE_ADD: {
      const recipes = [...state.recipes];
      recipes.splice(payload.index, 0, payload.recipe);
      return {
        ...state,
        recipes,
        edit: false,
        active: payload.index,
      };
    }
    case RECIPE_EDIT: return {
      ...state, edit: !state.edit,
    };
    case ACKNOWLEDGE_COOKIES: return {
      ...state,
      cookies: true,
    };
    default: return state;
  }
}

export default reducer;
