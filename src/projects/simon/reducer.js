import Constants from './Constants';
import arpeggio from './lib/arpeggio';
import {
  RESET_GAME,
  RESET_ROUND,
  TOGGLE_MODE,
  TOGGLE_WAVE,
  NEXT_ROUND,
  AI_PLAY,
  AI_END,
  START_GAME,
  COUNT_UP,
  SET_VOLUME,
  ERROR,
} from './actions';

const { MAJOR } = Constants.SCALES.PYTHAGOREAN;
const { MODE, WAVES, COLORS } = Constants;

function nxtWave(cur) {
  if (cur === WAVES.SIN) return WAVES.SQU;
  if (cur === WAVES.SQU) return WAVES.SAW;
  if (cur === WAVES.SAW) return WAVES.TRI;
  if (cur === WAVES.TRI) return WAVES.SIN;
  return cur;
}

const DEFAULT_STATE = {
  volume: 50,
  bpm: 126,
  round: 0,
  notes: arpeggio(MAJOR, 0),
  challenge: [],
  count: 0,
  mode: MODE.NORMAL,
  wave: WAVES.TRI,
  turn: true,
  inGame: false,
  error: '',
  tone: -1,
  colors: COLORS.NORMAL,
  settings: false,
};

function addRandomNote(arr, notes) {
  const n = Math.floor(Math.random() * notes.length);
  return arr.concat(notes[n]);
}

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case START_GAME: return {
      ...state,
      inGame: true,
      turn: false,
      challenge: addRandomNote(state.challenge, state.notes),
    };
    case COUNT_UP: return {
      ...state,
      count: state.count + 1,
    };
    case AI_PLAY: return {
      ...state,
      turn: false,
      tone: action.payload,
    };
    case AI_END: return { ...state, turn: true, tone: -1 };
    case NEXT_ROUND: return {
      ...state,
      turn: false,
      count: 0,
      round: state.round + 1,
      challenge: addRandomNote(state.challenge, state.notes),
    };
    case TOGGLE_MODE: return {
      ...state,
      mode: (state.mode === MODE.NORMAL) ? (MODE.HARD) : MODE.NORMAL,
    };
    case TOGGLE_WAVE: return { ...state, wave: nxtWave(state.wave) };
    case SET_VOLUME: return { ...state, volume: action.payload };
    case RESET_GAME: return {
      ...state,
      round: 0,
      count: 0,
      error: action.payload || '',
      inGame: false,
      turn: true,
      tone: -1,
      challenge: [],
    };
    case RESET_ROUND: return { ...state, count: 0 };
    case ERROR: return { ...state, error: action.payload };
    default: return state;
  }
}

export default reducer;
