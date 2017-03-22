import {
  WIN,
  LOSE,
  RESET_MESSAGE,
} from '../actions/Message';

export const DEFAULT = '';

export function setMessage(state, action) {
  switch (action.type) {
    case WIN: return {
      ...state,
      message: 'WINNER!',
    };
    case LOSE: return {
      ...state,
      message: 'GAME OVER',
    };
    case RESET_MESSAGE: return {
      ...state,
      message: '',
    };
    default: return state;
  }
}
