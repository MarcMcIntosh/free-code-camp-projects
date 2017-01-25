import Constants from './Constants';

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
