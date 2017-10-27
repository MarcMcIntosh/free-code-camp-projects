import { REHYDRATE } from 'redux-persist/constants';

import {
  ACKNOWLEDGE_COOKIES,
  RECIPE_ADD,
  RECIPE_EDIT,
  RECIPE_DELETE,
  RECIPE_VIEW,
  TOGGLE_MENU,
  ADD_NEW,
} from './actions';

const DEFAULT_STATE = {
  active: -1,
  recipes: [],
  edit: false,
  menu: true,
};

function reducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case REHYDRATE: return { ...state, ...payload };
    case RECIPE_VIEW: return { ...state, active: payload };
    case RECIPE_ADD: {
      if (state.active === -1) {
        /* adding a fresh one */
        const recipes = [].concat(payload, state.recipes);
        return { ...state, recipes, edit: false, active: 0 };
      }
      /* editing */
      const recipes = state.recipes.slice();
      recipes.splice(state.active, 1, payload.recipe);
      return { ...state, recipes, edit: false };
    }
    case ADD_NEW: return {
      ...state,
      active: -1,
      edit: true,
      menu: false,
    };
    case TOGGLE_MENU: return {
      ...state,
      menu: !state.menu,
    };
    case RECIPE_EDIT: return {
      ...state,
      edit: (payload !== undefined) ? payload : !state.edit,
    };
    case RECIPE_DELETE: {
      const recipes = state.recipes.slice();
      recipes.splice(payload, 1);
      return { ...state, recipes };
    }
    case ACKNOWLEDGE_COOKIES: return {
      ...state,
      cookies: true,
    };
    default: return state;
  }
}

export default reducer;
