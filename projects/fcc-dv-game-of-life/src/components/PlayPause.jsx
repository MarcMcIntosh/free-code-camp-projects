import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Button from './Button';

const PlayPause = ({ running, ...props }) => (<Button
  className={classnames('material-icons', (running) ? 'pause' : 'play')}
  title={(running ? 'stop' : 'start')}
  {...props}
>{(running) ? 'pause' : 'play_arrow'}</Button>);

PlayPause.propTypes = {
  running: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayPause;
