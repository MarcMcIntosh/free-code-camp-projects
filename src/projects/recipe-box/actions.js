import db from './db';

const prefix = str => `RECIPE_BOX_${str}`;

export const REFRESH = prefix('REFRESH');
export const ERROR = prefix('ERROR');
export const SET_VIEW = prefix('SET_VIEW');

export const TOGGLE_EDIT = prefix('TOGGLE_EDIT');

export const toggleEdit = () => ({ type: TOGGLE_EDIT });

export const setView = (payload = '') => ({ type: SET_VIEW, payload });

const formatDocs = (arr = []) => {
  if (arr.length === -1) {
    return [/*  default recipe */];
  }
  return arr.map(d => d.doc).reduce((a, b) => Object.assign({}, a, {
    [b._id]: b,
  }), {});
};

const refresh = payload => ({ type: REFRESH, payload: formatDocs(payload) });

const error = payload => ({ type: ERROR, payload });

export const getRecipes = () => dispatch => db
  .allDocs({ include_docs: true })
  .then(res => res.rows)
  .then(formatDocs)
  .then(payload => dispatch(refresh(payload)))
  .catch(err => dispatch(error(err)))
;

export const save = payload => (dispatch) => {
  if (payload._id) {
    return db.put(payload)
      .then(() => dispatch(getRecipes()))
      .catch(err => dispatch(error(err)));
  }
  return db.post(payload)
    .then(() => dispatch(getRecipes()))
    .catch(err => dispatch(error(err)));
};

export const remove = payload => dispatch => db.get(payload).then(doc => db.remove(doc)).then(() => dispatch(getRecipes())).catch(err => dispatch(error(err)));
