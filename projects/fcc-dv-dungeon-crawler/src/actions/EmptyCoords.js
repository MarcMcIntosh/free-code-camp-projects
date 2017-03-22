import tileType from '../utility/GameConstants';

export const EMPTY_COORDS = 'EMPTY_COORDS';
export const emptyCoords = () => (dispatch, getState) => {
  const state = getState();
  let coords;
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * state.map.length);
    y = Math.floor(Math.random() * state.map[0].length);
    if (state.map[x][y] === tileType.FLOOR && !state.occupiedSpaces[`${x}x${y}`]) {
      coords = { x, y };
    }
  } while (!coords);
  dispatch({ type: EMPTY_COORDS, payload: coords });
};
