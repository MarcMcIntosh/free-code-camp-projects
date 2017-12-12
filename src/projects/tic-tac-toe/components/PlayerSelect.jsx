import React from 'react';
import { func } from 'prop-types';
import Constants from '../Constants';

const { PLAYER: { O, X } } = Constants;

const PlayerSelect = ({ onClick, ...props }, { classnames }) => (<div {...props}>
  <h2 className={classnames('tic-tac-toe__header')}>Select Player</h2>

  <button
    type="button"
    tabIndex="0"
    value={O}
    className={classnames('tic-tac-toe__button', 'tic-tac-toe__button__icon', 'tic-tac-toe__button__icon--O')}
    onClick={onClick}
  >radio_button_unchecked</button>

  <button
    type="button"
    tabIndex="0"
    value={X}
    className={classnames('tic-tac-toe__button', 'tic-tac-toe__button__icon', 'tic-tac-toe__button__icon--X')}
    onClick={onClick}
  >clear</button>

</div>);

PlayerSelect.propTypes = { onClick: func.isRequired };

PlayerSelect.contextTypes = { classnames: func.isRequired };

export default PlayerSelect;
