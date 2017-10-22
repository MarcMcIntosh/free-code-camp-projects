import createDoc from './utils/createDoc';

const prefix = str => `RECIPE_BOX_${str}`;

export const CREATE = prefix('CREATE');
export const READ = prefix('READ');
export const UPDATE = prefix('UPDATE');
export const DELETE = prefix('DELETE');
export const TOGGLE_EDIT = prefix('TOGGLE_EDIT');


export const createRecipe = (values) => {
  const payload = createDoc(values);
  return { type: CREATE, payload };
};

export const updateRecipe = (values) => {
  const payload = createDoc(values);
  return ({ type: UPDATE, payload });
};

export const readRecipe = (payload = -1) => ({ type: READ, payload });


export const removeRecipe = payload => ({ type: DELETE, payload });

export const toggleEdit = () => ({ type: TOGGLE_EDIT });
