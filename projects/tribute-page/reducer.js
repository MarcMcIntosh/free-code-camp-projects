export const DEFAULT_STATE = {
  fetching: false,
  data: false,
  error: '',
  offset: 0,
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}
