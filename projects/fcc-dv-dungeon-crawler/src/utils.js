export function upDateOccupiedSpaces(obj, x, y, name, arg = { x: 0, y: 0 }) {
  const occupiedSpaces = Object.keys(obj).filter(d => d !== `${x}x${y}`).reduce((a, b) => Object.assign({}, a, { b: obj[b] }));
  return Object.assign({}, occupiedSpaces, {
    [`${x + arg.x}x${y + arg.y}`]: name,
  });
}

export function addVector(coords, vector) {
  return {
    x: coords.x + vector.x,
    y: coords.y + vector.y,
  };
}
