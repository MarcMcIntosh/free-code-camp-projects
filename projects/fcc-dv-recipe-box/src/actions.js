export const ACKNOWLEDGE_COOKIES = 'ACKNOWLEDGE_COOKIES';
export const acknowledgeCokkies = () => ({
  type: ACKNOWLEDGE_COOKIES,
});
export const RECIPE_ADD = 'RECIPE_ADD';
export const recipeAdd = payload => ({
  type: RECIPE_ADD, payload,
});

export const RECIPE_EDIT = 'RECIPE_EDIT';
export const recipeEdit = () => ({
  type: RECIPE_EDIT,
});

export const RECIPE_VIEW = 'RECIPE_VIEW';
export const recipeView = payload => ({
  type: RECIPE_VIEW, payload,
});

export const RECIPE_DELETE = 'RECIPE_DELETE';
export const recipeDelete = payload => ({
  type: RECIPE_DELETE, payload,
});
