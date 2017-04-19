import {
  SET_MAP,
  RESET_MAP,
} from '../actions/Map';
import { createMap } from '../utils';
import dungeonFloor from '../utility/dungeonFloor';

function mkMap() {
  const m = createMap();
  const d = dungeonFloor(m);
  return { map: m, dungeon: d };
}

export const DEFAULT = mkMap();

export default function (state, action) {
  switch (action.type) {
    case SET_MAP: return {
      ...state,
      ...mkMap(),
    };
    case RESET_MAP: return {
      ...state,
      ...mkMap(),
    };
    default: return state;
  }
}
