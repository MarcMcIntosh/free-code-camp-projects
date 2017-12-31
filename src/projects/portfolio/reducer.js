import apps from './appData';

export const DEFAULT_STATE = { apps };

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default reducer;
