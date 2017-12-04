import {
  TICK,
  START,
  STOP,
  RESET,
  MENU,
  // START_POMODORO,
  // STOP_POMODORO,
  SET_SESSION,
  // BEGIN_SESSION,
  SET_SHORT_BREAK,
  SET_LONG_BREAK,
  // COUNTER_TICK,
  SET_MAX_ROUNDS,
  // START_TIMER,
} from './actions';

export const DEFAULT_STATE = {
  timerId: -1,
  time: 25 * 60,
  shortBreak: 5,
  longBreak: 15,
  round: 0,
  maxRounds: Infinity,
  session: 25,
  rest: false,
  running: false,
  showMenu: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TICK: {
      if (!state.running) { return state; }
      const time = (state.time && state.time - 1) || (state.rest && state.session * 60) || (state.round % 4 && state.shortBreak * 60) || state.longBreak * 60;
      const rest = (!state.time && state.rest);
      const round = ((state.round === 0) || (state.time === 0 && state.rest)) ? state.round + 1 : state.round;
      const running = state.round < state.maxRounds;
      return { ...state, time, rest, round, running };
    }
    case START: return { ...state, timerId: action.payload, running: true };
    case STOP: return { ...state, running: false };
    case RESET: return { ...state, round: 0, rest: false, running: false, time: state.session * 60, session: 25, shortBreak: 5, longBreak: 15, rounds: 0, maxRounds: Infinity };
    case MENU: return { ...state, showMenu: !state.showMenu };
    case SET_SESSION: return {
      ...state, session: action.payload, time: (!state.running && !state.rest && !state.round) ? (action.payload * 60) : (+state.time),
    };
    case SET_SHORT_BREAK: return {
      ...state, shortBreak: action.payload,
    };
    case SET_LONG_BREAK: return {
      ...state, longBreak: action.payload,
    };
    case SET_MAX_ROUNDS: return {
      ...state, maxRounds: action.payload,
    };

    default: return state;
  }
}

export default reducer;
