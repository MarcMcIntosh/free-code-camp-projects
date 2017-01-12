export const CALC_ERROR = 'CALC_ERROR';
const calcError = payload => ({ type: CALC_ERROR, payload });
export const SET_ANSWER = 'SET_ANSWER';
const setAnswer = payload => ({ type: SET_ANSWER, payload });
export const SET_DISPLAY = 'SET_DISPLAY';
const setDisplay = payload => ({ type: SET_DISPLAY, payload });

/* eslint no-new-func: "off" */
const solve = calc => new Function(`return ${calc}`)();
const append = (str, n) => str + n;

export function handleUserInput(d) {
  return (dispatch, getState) => {
    const state = getState();
    const { display, answer } = state;
    const n = display.length - 1;
    const last = display[n];
    if (d === 'clear') {
      return dispatch(setDisplay(''));
    } else if (!isNaN(d)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === 'del' && n > 0) {
      const nxt = display.slice(0, n);
      return dispatch(setDisplay(nxt));
    } else if (d === '=' && !isNaN(last)) {
      const solution = solve(display);
      return (isNaN(+solution)) ? dispatch(calcError('Invalid sum')) : dispatch(setAnswer(solution));
    } else if (d === '-' && last !== '-') {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === 'ans' && /\d/.test(answer) && display !== answer) {
      const nxt = append(display, answer);
      return dispatch(setDisplay(nxt));
    } else if (d !== answer && d !== last && /\d/.test(last)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    }
    return dispatch(calcError('Invalid Input'));
  };
}
