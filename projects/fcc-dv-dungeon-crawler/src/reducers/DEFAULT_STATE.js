import { DEFAULT as entities } from './entities';
import { DEFAULT as level } from './level';
import { DEFAULT as map } from './map';
import { DEFAULT as occupiedSpaces } from './occupiedSpaces';
import { DEFAULT as message } from './message';
import {
  windowWidth,
  windowHeight,
} from './window';

const DEFAULT_STATE = {
  darkness: true,
  level,
  map,
  entities,
  occupiedSpaces,
  windowWidth,
  windowHeight,
  message,
};

export default DEFAULT_STATE;
