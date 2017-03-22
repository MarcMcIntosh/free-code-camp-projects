import {
  EMPTY_COORDS,
} from '../actions/EmptyCoords';

export const DEFAULT = null;

export function emptyCoords(state, action) {
  switch (action.type) {
    case EMPTY_COORDS: return {
      ...state,
      emptyCoords: action.payload,
    };
    default: return state;
  }
}
