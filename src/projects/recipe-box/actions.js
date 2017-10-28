const prefix = str => `RECIPE-BOX_${str}`;

export const CREATE = prefix('CREATE');
export const READ = prefix('READ');
export const UPDATE = prefix('UPDATE');
export const DELETE = prefix('DELETE');

export const createRecipe = (payload = true) => ({ type: CREATE, payload });

export const readRecipe = (payload = -1) => ({ type: READ, payload });

export const updateRecipe = payload => ({
  type: UPDATE, payload,
});

export const deleteRecipe = payload => ({ type: DELETE, payload });
