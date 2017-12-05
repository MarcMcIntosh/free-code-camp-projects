import Constants from './Constants';

const prefix = str => `SIMON_${str}`;
export const START_GAME = prefix('START_GAME');
const startGame = () => ({ type: START_GAME });
export const onStartGame = () => dispatch => dispatch(startGame());

export const SET_VOLUME = prefix('SET_VOLUME');
export const onSetVolume = payload => dispatch => dispatch({ type: SET_VOLUME, payload });

export const RESET_GAME = prefix('RESET_GAME');
const resetGame = () => ({ type: RESET_GAME });
export const onResetGame = () => dispatch => dispatch(resetGame());

export const RESET_ROUND = prefix('RESET_ROUND');
const resetRound = () => ({ type: RESET_ROUND });
export const onResetRound = () => dispatch => dispatch(resetRound());

export const TOGGLE_MODE = prefix('TOGGLE_MODE');
const toggleMode = () => ({ type: TOGGLE_MODE });
export const onToggleMode = () => dispatch => dispatch(toggleMode());

export const TOGGLE_WAVE = prefix('TOGGLE_WAVE');
export const onToggleWave = () => dispatch => dispatch({ type: TOGGLE_WAVE });


export const AI_PLAY = prefix('AI_PLAY');
const aiPlay = payload => ({ type: AI_PLAY, payload });
export const onAiPlay = payload => dispatch => dispatch(aiPlay(payload));

export const AI_END = prefix('AI_END');
const aiEnd = () => ({ type: AI_END });
export const onAiEnd = () => dispatch => dispatch(aiEnd());

const { HARD } = Constants.MODE;
export const NEXT_ROUND = prefix('NEXT_ROUND');
export const COUNT_UP = prefix('COUNT_UP');
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
