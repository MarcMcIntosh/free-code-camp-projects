const prefix = str => `FILE-SIZE__${str}`;

export const SUBMITED = prefix('SUBMITED');
export const REJECTED = prefix('REJECTED');
export const RECEIVED = prefix('RECEIVED');
export const CLEAR_RESULTS = prefix('CLEAR_RESULTS');

export const submitting = () => ({ type: SUBMITED });
export const rejected = payload => ({ type: REJECTED, payload });
export const received = payload => ({ type: RECEIVED, payload });
export const reset = () => ({ type: CLEAR_RESULTS });
