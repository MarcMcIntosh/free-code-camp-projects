import Constants from './Constants';

export const START_GAME = 'START_GAME';
const startGame = () => ({ type: START_GAME });
export const onStartGame = () => dispatch => dispatch(startGame());

export const SET_VOLUME = 'SET_VOLUME';
export const onSetVolume = payload => dispatch => dispatch({ type: SET_VOLUME, payload });

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
export const onToggleWave = () => dispatch => dispatch({ type: TOGGLE_WAVE });


export const AI_PLAY = 'AI_PLAY';
const aiPlay = payload => ({ type: AI_PLAY, payload });
export const onAiPlay = payload => dispatch => dispatch(aiPlay(payload));

export const AI_END = 'AI_END';
const aiEnd = () => ({ type: AI_END });
export const onAiEnd = () => dispatch => dispatch(aiEnd());

const { HARD } = Constants.MODE;
export const NEXT_ROUND = 'NEXT_ROUND';
export const COUNT_UP = 'COUNT_UP';
export function onPlayerInput(frequency) {
  return (dispatch, getState) => {
    const {
      count,
      challenge,
      mode,
    } = getState();
    if (frequency !== challenge[count]) {
      return dispatch((mode === HARD) ? resetGame() : resetRound());
    }
    return dispatch({
      type: (count < challenge.length - 1) ? COUNT_UP : NEXT_ROUND,
    });
  };
}
