import reduceReducers from 'reduce-reducers';
import darkness from './reducers/darkness';
import entities from './reducers/entities';
import level from './reducers/level';
import map from './reducers/map';
import occupiedSpaces from './reducers/occupiedSpaces';
import window from './reducers/window';

export default reduceReducers(
  darkness,
  window,
  entities,
  level,
  map,
  occupiedSpaces,
);
