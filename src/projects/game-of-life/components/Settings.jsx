import React from 'react';
import { func, number, bool } from 'prop-types';
import Slider from './Slider';

const Settings = ({
  speed,
  onSetSpeed,
  width,
  onSetSize,
  running,
}, { classnames }) => (<div className={classnames('game-of-life__settings')}>
  <div>
    <h2 className={classnames('game-of-life__subtitle')}>
      Tick delay in milliseconds
    </h2>
    <Slider min={0} max={1000} step={100} value={speed} label="Speed" onChange={onSetSpeed} />
  </div>
  <div>
    <h2 className={classnames('game-of-life__subtitle')}>Board size cell-by-cell</h2>
    <Slider min={6} max={30} step={1} value={width} label="Size" onChange={onSetSize} disabled={running} />
  </div>
</div>);

Settings.propTypes = {
  width: number.isRequired,
  speed: number.isRequired,
  running: bool.isRequired,
  onSetSize: func.isRequired,
  onSetSpeed: func.isRequired,
};

Settings.contextTypes = { classnames: func.isRequired };

export default Settings;
