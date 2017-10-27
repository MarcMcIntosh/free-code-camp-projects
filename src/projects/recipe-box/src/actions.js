const prefix = str = `RECIPE-BOX_${str}`;

export const ACKNOWLEDGE_COOKIES = 'ACKNOWLEDGE_COOKIES';
export const acknowledgeCokkies = () => ({
  type: ACKNOWLEDGE_COOKIES,
});
export const RECIPE_ADD = 'RECIPE_ADD';
export const recipes = payload => ({
  type: RECIPE_ADD, payload,
});

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({ type: TOGGLE_MENU });

export const ADD_NEW = 'ADD_NEW';
export const addNew = () => ({
  type: ADD_NEW,
});

export function recipeAdd(recipe) {
  return recipes(recipe);
}

export const RECIPE_EDIT = 'RECIPE_EDIT';
export const recipeEdit = payload => ({
  type: RECIPE_EDIT, payload,
});

export const RECIPE_VIEW = 'RECIPE_VIEW';
export const recipeView = payload => ({
  type: RECIPE_VIEW, payload,
});

export const RECIPE_DELETE = 'RECIPE_DELETE';
export const recipeDelete = payload => ({ type: RECIPE_DELETE, payload });
