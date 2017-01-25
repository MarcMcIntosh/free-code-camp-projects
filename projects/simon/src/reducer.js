import Constants from './Constants';
import arpeggio from './lib/arpeggio';
import {
  RESET_GAME,
  RESET_ROUND,
  TOGGLE_MODE,
  TOGGLE_WAVE,
  NEXT_ROUND,
  AI_FINISH,
} from './actions';

const { MAJOR } = Constants.SCALES.PYTHAGOREAN;
const { MODE, WAVES } = Constants;
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
  wave: WAVES.SIN,
  turn: true,
  timer_id: null,
  inGame: false,
};

function addRandomNote(arr, notes) {
  const n = Math.floor(Math.random() * notes.length);
  return arr.concat(notes[n]);
}

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case NEXT_ROUND: return {
      ...state,
      round: state.round + 1,
      challenge: addRandomNote(state.challenge),
      turn: false,
    };
    case AI_FINISH: return {
      ...state,
      turn: true,
    };
    case TOGGLE_MODE: return {
      ...state,
      mode: (state.mode === MODE.NORMAL) ? (MODE.HARD) : MODE.NORMAL,
    };
    case TOGGLE_WAVE: return {
      ...state,
      wave: nxtWave(state.wave),
    };
    case RESET_GAME: return DEFAULT_STATE;
    case RESET_ROUND: return { ...state, count: 0 };
    default: return state;
  }
}

export default reducer;
