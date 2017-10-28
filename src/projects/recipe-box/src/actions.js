
export const EDIT_CAKE = 'EDIT_CAKE';
export const editCake = payload => ({
  type: EDIT_CAKE,
  payload,
});

export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const UPDATE_CAKE = 'UPDATE_CAKE';
export const updateCake = payload => ({
  type: UPDATE_CAKE,
  payload,
});

export const ADD_CAKE = 'ADD_CAKE';
export const addCake = () => ({ type: ADD_CAKE });

export const SAVE_CAKE = 'SAVE_CAKE';
export const saveCake = payload => ({ type: SAVE_CAKE, payload });

export const REMOVE_CAKE = 'REMOVE_CAKE';
export const rmCake = payload => ({
  type: REMOVE_CAKE,
  payload,
});

export const ACCEPT_COOKIE = 'ACCEPT_COOKIE';
export const acceptCookie = () => ({ type: ACCEPT_COOKIE });
