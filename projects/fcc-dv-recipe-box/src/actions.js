export const ACKNOWLEDGE_COOKIES = 'ACKNOWLEDGE_COOKIES';
export const acknowledgeCokkies = () => ({
  type: ACKNOWLEDGE_COOKIES,
});
export const RECIPE_ADD = 'RECIPE_ADD';
export const recipes = payload => ({
  type: RECIPE_ADD, payload,
});

export function recipeAdd(recipe, index) {
  return dispatch => dispatch(recipes({ recipe, index }));
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
export const recipeDelete = payload => ({
  type: RECIPE_DELETE, payload,
});
