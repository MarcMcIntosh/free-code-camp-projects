export const ADD_BOSS = 'ADD_BOSS';
export function addBoss(attack, health, location, tile) {
  return {
    type: ADD_BOSS,
    payload: { attack, health, location, tile },
  };
}

export const MOVE = 'MOVE';
export function move(entityName, vector) {
  return {
    type: MOVE,
    payload: { entityName, vector },
  };
}

export const SET_LOCATION = 'SET_LOCATION';
export function setLocation(entityName, location) {
  return {
    type: SET_LOCATION,
    payload: { entityName, location },
  };
}

export const REMOVE_ENTITY = 'REMOVE_ENTITY';
export function removeEntity(entityName) {
  return {
    type: REMOVE_ENTITY,
    payload: { entityName },
  };
}

export const RESET_BOARD = 'RESET_BOARD';
export function resetBoard() {
  return { type: RESET_BOARD };
}

export const ADD_ENTITY = 'ADD_ENTITY';
export function addEntity(entityName, entityType, health, attack, location, tile) {
  return {
    type: ADD_ENTITY,
    payload: {
      entityName,
      entityType,
      health,
      attack,
      location,
      tile,
    },
  };
}
