import {
  RESET_POMODORO,
  START_POMODORO,
  STOP_POMODORO,
  SET_SESSION,
  BEGIN_SESSION,
  SET_SHORT_BREAK,
  BEGIN_SHORT_BREAK,
  SET_LONG_BREAK,
  BEGIN_LONG_BREAK,
  COUNTER_TICK,
  SET_MAX_ROUNDS,
  START_TIMER,
} from './actions';

export const DEFAULT_STATE = {
  time: 0,
  shortBreak: 5,
  longBreak: 15,
  round: 0,
  maxRounds: 5,
  session: 25,
  rest: false,
  paused: false,
  running: false,
  timerId: -1,
  init: true,
  showMenu: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case COUNTER_TICK: {
      const time = state.time && state.time - 1;
      // const running = !!(time && state.running);
      return { ...state, time };
    }
    case START_TIMER: return { ...state, timer_id: action.payload, paused: false, running: true };
    case STOP_POMODORO: return {
      ...state, paused: true,
    };
    case START_POMODORO: return { ...state, paused: false, init: false, running: true };
    case RESET_POMODORO: return { ...state, round: 0, rest: false, paused: false, running: false, time: 0, init: true };
    case BEGIN_SESSION: return {
      ...state,
      time: state.session,
      rest: false,
      paused: false,
      round: state.round + 1,
    };
    case BEGIN_SHORT_BREAK: return {
      ...state,
      time: state.short_break,
      rest: 'short',
    };
    case BEGIN_LONG_BREAK: return {
      ...state,
      time: state.long_break,
      rest: 'long',
    };
    case SET_SESSION: return {
      ...state, session: action.payload,
    };
    case SET_SHORT_BREAK: return {
      ...state, short_break: action.payload,
    };
    case SET_LONG_BREAK: return {
      ...state, long_break: action.payload,
    };
    case SET_MAX_ROUNDS: return {
      ...state, max_rounds: action.payload,
    };

    default: return state;
  }
}

export default reducer;
