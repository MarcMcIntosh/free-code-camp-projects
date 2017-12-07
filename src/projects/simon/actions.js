const prefix = str => `SIMON_${str}`;

export const START_GAME = prefix('START_GAME');
export const startGame = () => ({ type: START_GAME });

export const SET_VOLUME = prefix('SET_VOLUME');
export const setVolume = payload => ({ type: SET_VOLUME, payload });

export const RESET_GAME = prefix('RESET_GAME');
export const resetGame = () => ({ type: RESET_GAME });

export const RESET_ROUND = prefix('RESET_ROUND');
export const resetRound = () => ({ type: RESET_ROUND });

export const TOGGLE_MODE = prefix('TOGGLE_MODE');
export const toggleMode = () => ({ type: TOGGLE_MODE });


export const TOGGLE_WAVE = prefix('TOGGLE_WAVE');
export const toggleWave = () => ({ type: TOGGLE_WAVE });

export const AI_START = prefix('AI_START');
export const aiStart = payload => ({ type: AI_START, payload });

export const AI_PLAY = prefix('AI_PLAY');
export const aiPlay = payload => ({ type: AI_PLAY, payload });

export const AI_END = prefix('AI_END');
export const aiEnd = () => ({ type: AI_END });

export const SET_TONE = prefix('SET_TONE');
export const setTone = payload => ({ type: SET_TONE, payload });

export const COUNT_UP = prefix('COUNT_UP');
export const countUp = () => ({ type: COUNT_UP });

export const NEXT_ROUND = prefix('NEXT_ROUND');
export const nextRound = () => ({ type: NEXT_ROUND });

export const TOGGLE_SETTINGS = prefix('TOFFLE_SETTINGS');
export const toggleSettings = () => ({ type: TOGGLE_SETTINGS });
