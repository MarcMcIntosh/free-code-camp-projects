import Constants from './Constants';
import arpeggio from './lib/arpeggio';
import {
  RESET_GAME,
  RESET_ROUND,
  TOGGLE_MODE,
  TOGGLE_WAVE,
  TOGGLE_SETTINGS,
  NEXT_ROUND,
  AI_START,
  AI_PLAY,
  AI_END,
  START_GAME,
  COUNT_UP,
  SET_VOLUME,
  ERROR,
  SET_TONE,
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
  aiChallenge: [],
  aiCount: 0,
  aiClock: -1,
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

function aiNotes(arr) {
  return Array.from({
    length: arr.length * 2,
  }, (note, index) => {
    if (index % 2) { return -1; }
    return arr[index / 2];
  });
}

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case START_GAME: {
      const challenge = addRandomNote(state.challenge, state.notes);
      const aiChallenge = aiNotes(challenge);
      return {
        ...state, inGame: true, turn: false, challenge, aiChallenge, aiCount: 0, count: 0,
      };
    }
    case COUNT_UP: return {
      ...state,
      count: state.count + 1,
    };
    case SET_TONE: return { ...state, tone: action.payload };
    case AI_START: return { ...state, aiClock: action.payload };
    case AI_PLAY: return {
      ...state,
      tone: action.payload,
      aiCount: state.aiCount + 1,
    };
    case AI_END: return {
      ...state,
      turn: true,
      tone: -1,
      aiCount: 0,
      aiClock: -1,
    };
    case NEXT_ROUND: {
      const challenge = addRandomNote(state.challenge, state.notes);
      const aiChallenge = aiNotes(challenge);
      return { ...state, challenge, aiChallenge, turn: false, count: 0, aiCount: 0, round: state.round + 1 };
    }
    case TOGGLE_MODE: return {
      ...state,
      mode: (state.mode === MODE.NORMAL) ? (MODE.HARD) : MODE.NORMAL,
    };
    case TOGGLE_WAVE: return { ...state, wave: nxtWave(state.wave) };
    case TOGGLE_SETTINGS: return { ...state, settings: !state.settings };
    case SET_VOLUME: return { ...state, volume: action.payload };
    case RESET_GAME: return {
      ...state,
      round: 0,
      count: 0,
      error: false,
      inGame: false,
      turn: true,
      tone: -1,
      challenge: [],
      aiCount: 0,
      aiChallenge: [],
    };
    case RESET_ROUND: return {
      ...state,
      turn: false,
      count: 0,
      aiCount: 0,
      error: false,
    };
    case ERROR: return { ...state, error: action.payload };
    default: return state;
  }
}

export default reducer;
