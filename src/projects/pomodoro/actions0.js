const prefix = str => `POMODORO-CLOCK_${str}`;

export const COUNTER_TICK = prefix('COUNTER_TICK');
export const counterTick = () => ({ type: COUNTER_TICK });

export const START_POMODORO = prefix('START_POMODORO');
export const startPomodoro = () => ({ type: START_POMODORO });

export const RESET_POMODORO = prefix('RESET_POMODORO');
const resetPomodoro = () => ({ type: RESET_POMODORO });

export const STOP_POMODORO = prefix('STOP_POMODORO');
export const stopPomodoro = () => ({ type: STOP_POMODORO });


/* Verify below */
export const SET_SESSION = prefix('SET_SESSION');
export const BEGIN_SESSION = prefix('BEGIN_SESSION');
const setSession = payload => ({ type: SET_SESSION, payload });
const beginSession = () => ({ type: BEGIN_SESSION });

export const SET_SHORT_BREAK = prefix('SET_SHORT_BREAK');
export const BEGIN_SHORT_BREAK = prefix('BEGIN_SHORT_BREAK');
export const setShortBreak = payload => ({ type: SET_SHORT_BREAK, payload });
export const beginShortBreak = () => ({ type: BEGIN_SHORT_BREAK });

export const SET_LONG_BREAK = prefix('SET_LONG_BREAK');
export const BEGIN_LONG_BREAK = prefix('BEGIN_LONG_BREAK');
export const setLongBreak = payload => ({ type: SET_LONG_BREAK, payload });
export const beginLongBreak = () => ({ type: BEGIN_LONG_BREAK });


export const SET_MAX_ROUNDS = prefix('SET_MAX_ROUNDS');
export const setMaxRounds = payload => ({
  type: SET_MAX_ROUNDS,
  payload,
});
export const START_TIMER = prefix('START_TIMER');
const startTimer = payload => ({
  type: START_TIMER, payload,
});

export function onSetSession(num) {
  return dispatch => dispatch(setSession(num));
}

export function onSetShortBreak(num) {
  return dispatch => dispatch(setShortBreak(num));
}
export function onSetLongBreak(num) {
  return dispatch => dispatch(setLongBreak(num));
}

export function onReset() {
  return dispatch => dispatch(resetPomodoro());
}
export function onSetMaxRounds(val) {
  return dispatch => dispatch(setMaxRounds(val));
}
function timer() {
  return (dispatch, getState) => {
    const state = getState();
    const { time, init, round, rest } = state;
    if (init) {
      dispatch(startPomodoro());
      dispatch(beginSession());
    } else if (time <= 0 && rest) {
      dispatch(beginSession());
    } else if (time <= 0 && round !== state.max_rounds && !rest) {
      dispatch(beginShortBreak());
    } else if (time <= 0 && round === state.max_rounds && !rest) {
      dispatch(beginLongBreak());
    } else if (time <= 0 && round >= state.max_rounds && rest) {
      clearInterval(state.timer_id);
      dispatch(resetPomodoro());
    } else if (time % 1000 === 0) {
      dispatch(counterTick(-1000));
    }
  };
}

export function onStart() {
  return (dispatch) => {
    dispatch(
      startTimer(
        setInterval(() => dispatch(timer()), 1000),
      ),
    );
  };
}

export function onStop() {
  return (dispatch, getState) => {
    clearInterval(getState().timer_id);
    return dispatch(stopPomodoro());
  };
}
