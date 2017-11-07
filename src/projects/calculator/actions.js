
const prefix = str => (`CALCULATOR_${str}`);

export const CALC_ERROR = prefix('ERROR');
const calcError = payload => ({ type: CALC_ERROR, payload });
export const SET_ANSWER = prefix('SET_ANSWER');
const setAnswer = payload => ({ type: SET_ANSWER, payload });
export const SET_DISPLAY = prefix('SET_DISPLAY');
const setDisplay = payload => ({ type: SET_DISPLAY, payload });
// export const SET_ERROR = 'SET_ERROR';


/* eslint no-new-func: "off" */
const solve = calc => '' + new Function(`return ${calc}`)();
const append = (str, n) => str + n;

export function clearError() {
  return dispatch => dispatch(calcError({ error: null, errorId: null }));
}

export function handleUserError(err) {
  return (dispatch, getState) => {
    // const last = getState().errorId;
    const { calculator: { errorId } } = getState();
    /* Curently displaying an error */
    if (errorId) { clearTimeout(errorId); }
    const nxt = setTimeout(() => dispatch(calcError({
      error: null,
      errorId: null,
    })), 5000);
    dispatch(calcError({ error: err, errorId: nxt }));
  };
}

export function handleUserInput(d) {
  return (dispatch, getState) => {
    const { calculator: { display, answer } } = getState();
    const n = display.length - 1;
    const last = display[n];
    if (d === 'clear') {
      return dispatch(setDisplay(''));
    } else if (!isNaN(d)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === 'del') {
      const nxt = display.substring(0, n);
      return dispatch(setDisplay(nxt));
    } else if (d === '.' && !isNaN(last)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === '=' && !isNaN(last)) {
      const solution = solve(display);
      return (isNaN(+solution)) ? dispatch(handleUserError('Invalid sum')) : dispatch(setAnswer(solution));
    } else if (d === '-' && last !== '-') {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === 'ans' && answer === null) {
      return dispatch(setDisplay(display));
    } else if (d === 'ans' && /\d/.test(answer)) {
      const nxt = append(display, answer);
      return dispatch(setDisplay(nxt));
    } else if (d !== answer && d !== last && /\d/.test(last)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (display === answer && /[0-9+-/.*%]/.test(d)) {
      const nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    }
    return dispatch(handleUserError('Invalid Input'));
  };
}
