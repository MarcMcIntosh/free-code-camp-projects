import { SET_VIEW, TOGGLE_EDIT, REFRESH, ERROR } from './actions';

const DEFAULT_STATE = { active: '', recipes: {}, edit: false, error: '' };

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REFRESH: return { ...state, recipes: action.payload };
    case SET_VIEW: return { ...state, active: action.payload };
    case TOGGLE_EDIT: return { ...state, edit: !state.edit };
    case ERROR: return { ...state, error: action.payload };
    default: return state;
  }
}

export default reducer;
