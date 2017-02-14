export const ON_INPUT = 'ON_INPUT';

export const onInput = payload => dispatch => dispatch({
  type: ON_INPUT,
  payload,
});
