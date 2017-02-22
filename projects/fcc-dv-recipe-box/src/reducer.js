import {
  ACKNOWLEDGE_COOKIES,
  RECIPE_ADD,
  RECIPE_EDIT,
  TOGGLE_MENU,
  ADD_NEW,
} from './actions';

const DEFAULT_STATE = {
  active: -1,
  recipes: [{
    name: 'Baked Tattie',
    ingredients: [{
      name: 'Tattie',
      quantity: '1',
    }],
    notes: '',
  }, {
    name: 'Soup',
    ingredients: [{
      name: 'any thing',
      quantity: 'loads',
    }],
    notes: '',
  }],
  cookies: false,
  edit: false,
  menu: true,
};

function reducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case RECIPE_ADD: {
      const recipes = [...state.recipes];
      recipes.splice(state.active + 1, 0, payload.recipe);
      return {
        ...state,
        recipes,
        edit: false,
        active: payload.index,
      };
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
    case ACKNOWLEDGE_COOKIES: return {
      ...state,
      cookies: true,
    };
    default: return state;
  }
}

export default reducer;
