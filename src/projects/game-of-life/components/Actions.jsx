import React from 'react';
import { func, bool } from 'prop-types';

const Actions = ({
  togglePlay,
  toggleSettings,
  toggleRules,
  running,
  isBlank,
  onResetGame,
  onSetRandom,
}, { classnames }) => {
  const buttonClassName = classnames('game-of-life__action');
  const iconClassName = classnames('game-of-life__action--icon');
  return (<div className={classnames('game-of-life__actions')}>

    <button disabled={isBlank} className={buttonClassName} tabIndex="0" type="button" title="Toggle Play" onClick={togglePlay} >
      <i className={iconClassName}>{running ? 'pause' : 'play_arrow'}</i>
    </button>

    <button className={buttonClassName} tabIndex="0" type="button" title="Settings" onClick={toggleSettings}>
      <i className={iconClassName}>settings</i>
    </button>

    <button className={buttonClassName} tabIndex="0" type="button" title="Reset or randomize" disabled={running} onClick={isBlank ? onSetRandom : onResetGame} >{isBlank ? 'random' : 'reset'}</button>

    <button className={buttonClassName} tabIndex="0" type="button" title="Show rules" onClick={toggleRules} >Rules</button>
  </div>);
};

Actions.propTypes = {
  togglePlay: func.isRequired,
  toggleRules: func.isRequired,
  toggleSettings: func.isRequired,
  running: bool.isRequired,
  isBlank: bool.isRequired,
  onSetRandom: func.isRequired,
  onResetGame: func.isRequired,
};

Actions.contextTypes = { classnames: func.isRequired };

export default Actions;
