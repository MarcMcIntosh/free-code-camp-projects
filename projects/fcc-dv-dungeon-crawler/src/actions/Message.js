export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const RESET_MESSAGE = 'RESET_MESSAGE';

export const onWin = () => ({ type: WIN });

export const onLose = () => ({ type: LOSE });

export const onResetMessage = () => ({ type: RESET_MESSAGE });
