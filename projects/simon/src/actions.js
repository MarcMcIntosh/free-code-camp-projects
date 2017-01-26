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

export const AI_PLAY = 'AI_PLAY';
const aiPlay = payload => ({ type: AI_PLAY, payload });
export const onAiPlay = payload => dispatch => dispatch(aiPlay(payload));

export const AI_END = 'AI_END';
const aiEnd = () => ({ type: AI_END });
export const onAiEnd = () => dispatch => dispatch(aiEnd());
