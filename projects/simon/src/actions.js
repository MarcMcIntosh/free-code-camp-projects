import Constants from './Constants';

export const START_GAME = 'START_GAME';
const startGame = () => ({ type: START_GAME });
export const onStartGame = () => dispatch => dispatch(startGame());

export const RESET_GAME = 'RESET_GAME';
const resetGame = () => ({ type: RESET_GAME });
export const onResetGame = () => dispatch => dispatch(resetGame());

export const RESET_ROUND = 'RESET_ROUND';
const resetRound = () => ({ type: RESET_ROUND });
export const onResetRound = () => dispatch => dispatch(resetRound());

export const TOGGLE_MODE = 'TOGGLE_MODE';
const toggleMode = () => ({ type: TOGGLE_MODE });
export const onToggleMode = () => dispatch => dispatch(toggleMode());

export const TOGGLE_WAVE = 'TOGGLE_WAVE';
const toggleWave = playload => ({ type: TOGGLE_WAVE, playload });

export const onToggleWave = (event) => {
  const { SIN, SQU, SAW, TRI } = Constants.WAVES;
  switch (event.target.value) {
    case SIN: return toggleWave(SQU);
    case SQU: return toggleWave(SAW);
    case SAW: return toggleWave(TRI);
    case TRI: return toggleWave(SIN);
    default: return toggleWave(event.target.value);
  }
};

export const AI_START = 'AI_START';
const aiStart = () => ({ type: AI_START });
export const AI_FINISH = 'AI_FINISH';
const aiFinish = () => ({ type: AI_FINISH });
export const PLAY_TONE = 'PLAY_TONE';
const playTone = payload => ({ type: PLAY_TONE, payload });

export function onAiStart(audio, aux) {
  return (dispatch, getState) => {
    dispatch(aiStart());
    const { challenge, bpm, wave } = getState();
    /* interval between beets in milliseconds */
    const t = (60 * 1000) / bpm;
    for (let i = 0; i < challenge.length; i += 1) {
      const osc = audio.createOscillator({
        type: wave,
        frequency: challenge[i],
      });
      osc.connect(aux);
      dispatch(playTone(challenge[i]));
      osc.start(audio.currentTime);
      setTimeout(() => {
        osc.stop(audio.currentTime);
        osc.disconnect(aux);
        if (i === challenge.length) {
          dispatch(aiFinish());
        }
      }, t / 2);
    }
  };
}
