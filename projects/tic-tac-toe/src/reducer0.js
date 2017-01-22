import Immutable from 'immutable';
import Constants from './Constants';
import {
  RESET_GAME,
  SET_PLAYER,
  TAKE_TURN,
} from './actions';

function getInitialState() {
  return Immutable.fromJS({
    board: [...Array(9)].map(() => Constants.PLAYER._),
    ai: Constants.PLAYER._,
    player: Constants.PLAYER._,
    winner: null,
    done: false,
    turn: null,
    init: true,
  });
}

function reducer(state = getInitialState(), action) {
  switch (action.type) {

    case RESET_GAME: return getInitialState();

    case SET_PLAYER: return state.set('player', action.payload).set('ai', !action.payload).set('turn', true).set('init', false);

    case TAKE_TURN: return state.set('board', action.payload.board).set('turn', !state.get('turn')).set('done', action.payload.done || state.get('done')).set('winner', action.payload.winner || state.get('winner'));

    default: return state;
  }
}

export default reducer;
