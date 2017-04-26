import {
  RESET_LEVEL,
  INCREASE_LEVEL,
} from '../actions/Level';

export const DEFAULT = 0;

export default function (state, action) {
  switch (action.type) {
    // console.log('Reset Board, set map then increase level is causing some errs')
    case INCREASE_LEVEL: return {
      ...state,
      level: state.level + 1,
    };
    case RESET_LEVEL: return {
      ...state,
      level: 1,
    };
    default: return state;
  }
}
