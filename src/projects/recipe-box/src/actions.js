import db from './db';

const prefix = str => `RECIPE_BOX_${str}`;

export const ADD = prefix('ADD');
export const REFRESH = prefix('REFRESH');
export const ERROR = prefix('ERROR');
export const UPDATE = prefix('UPDATE');
export const REMOVE = prefix('REMOVE');
export const EDIT = prefix('EDIT');

const refresh = payload => ({ type: REFRESH, payload });

const error = payload => ({ type: ERROR, payload });

export const getRecipes = () => dispatch => db.allDocs({ include_docs: true }).then(payload => dispatch(refresh(payload.rows))).catch(e => dispatch(error(e)));

/* add a dovument to the data base and then to the recipes obj */
export const add = payload => ({ type: ADD, payload });

/* Update a documet then propergate the change */
export const update = payload => ({ type: UPDATE, payload });

/* Remove a document */
export const remove = payload => ({ type: REMOVE, payload });
