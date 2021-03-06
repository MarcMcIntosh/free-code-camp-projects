
const prefix = str => `MARKDOWN-PREVIEWER_${str}`;

export const ON_INPUT = prefix('ON_INPUT');

export const onInput = payload => dispatch => dispatch({
  type: ON_INPUT,
  payload,
});
