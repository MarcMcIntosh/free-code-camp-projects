import React from 'react';
import { bool, func, oneOf } from 'prop-types';
import Constants from '../Constants';

const Header = ({
  init,
  player,
  turn,
  done,
  winner,
  selectPlayer,
  resetGame,
}, {
  classnames,
}) => {
  if (init) {
    return (<div className={classnames('tic-tac-toe__header')}><h2>Select Player</h2>
      <button type="button" tabIndex="0" value={Constants.PLAYER.O} className={classnames('tic-tac-toe__button', 'tic-tac-toe__button__icon', 'tic-tac-toe__button__icon--O')} onClick={selectPlayer}>radio_button_unchecked</button>
      <button type="button" tabIndex="0" value={Constants.PLAYER.X} className={classnames('tic-tac-toe__button', 'tic-tac-toe__button__icon', 'tic-tac-toe__button__icon--X')} onClick={selectPlayer}>clear</button>
    </div>);
  } else if (done) {
    return (<div className={classnames('tic-tac-toe__header')}>
      <h2>{(winner) ? `${winner} Won` : 'Draw'}</h2>
      <button type="button" title="Reset" tabIndex="0" className={classnames('tic-tac-toe__button')} onClick={resetGame}>Reset</button>
    </div>);
  }
  return (<h2 className={classnames('tic-tac-toe__header')}>{(turn === player) ? 'Player\'s Turn' : 'Computer\'s Turn'}</h2>);
};

const { _, O, X } = Constants.PLAYER;
Header.propTypes = {
  init: bool.isRequired,
  done: bool.isRequired,
  turn: oneOf([_, O, X]).isRequired,
  player: oneOf([_, O, X]).isRequired,
  winner: oneOf([_, O, X]).isRequired,
  resetGame: func.isRequired,
  selectPlayer: func.isRequired,
};

Header.contextTypes = { classnames: func.isRequired };

export default Header;
