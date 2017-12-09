import React from 'react';
import { func, oneOf, number, bool, array } from 'prop-types';
import Slider from './Slider';
import Switch from './Switch';

const Settings = ({ isOpen, mode, onToggleMode, volume, onSetVolume, wave, onToggleWave, controlKeys }, { classnames }) => (<ul className={classnames('simon__settings', isOpen && 'simon__settings--open')}>

  <li className={classnames('simon__setting')}>
    <div className={classnames('simon__setting__title')}>
      Difficulty: {mode}
    </div>

    <div className={classnames('simon__setting__content')}>
      <Switch name="mode" label="Difficulty" onChange={onToggleMode} value={mode} />
    </div>
  </li>

  <li className={classnames('simon__setting')}>
    <div htmlFor="Volume" className={classnames('simon__setting__title')}>
      Volume
    </div>
    <div className={classnames('simon__setting__content')}>
      <Slider name="Volume" min="0" max="100" step="10" onChange={onSetVolume} value={volume} label="Volume" />
    </div>
  </li>

  <li className={classnames('simon__setting')}>
    <div className={classnames('simon__setting__title')}>
      Wave
    </div>
    <div className={classnames('simon__setting__content')}>
      <button type="button" name="wave" title="Wave shape" tabIndex="0" onClick={onToggleWave} value={wave} className={classnames('simon__wave', `simon__wave--${wave}`)} />
    </div>
  </li>

  <li className={classnames('simon__setting')}>
    <div className={classnames('simon__setting__title')}>
      Keyboard keys
    </div>
    <div className={classnames('simon__setting__content')}>
      {controlKeys.join(' ')}
    </div>
  </li>
</ul>);

Settings.propTypes = {
  isOpen: bool.isRequired,
  wave: oneOf(['sine', 'square', 'sawtooth', 'triangle']).isRequired,
  volume: number.isRequired,
  mode: oneOf(['normal', 'hard']).isRequired,
  onToggleWave: func.isRequired,
  onSetVolume: func.isRequired,
  onToggleMode: func.isRequired,
  controlKeys: array.isRequired,
};

Settings.contextTypes = { classnames: func.isRequired };

export default Settings;
