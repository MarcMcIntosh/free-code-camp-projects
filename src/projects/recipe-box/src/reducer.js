import {
  ADD,
  EDIT,
  ERROR,
  REFRESH,
  REMOVE,
  UPDATE,
} from './actions';


const DEFAULT_STATE = {
  active: -1,
  recipes: {},
  edit: '',
};

function reducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case REFRESH:
    case ADD:
    case EDIT:
    case ERROR:
    case REMOVE:
    case UPDATE: return { ...state, ...payload };
    default: return state;
  }
}

export default reducer;
