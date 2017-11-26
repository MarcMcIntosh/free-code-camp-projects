import React from 'react';
import { func } from 'prop-types';

const Loader = (props, {
  classnames,
}) => (<div className={classnames('leader-board-loader')} role="progressbar" {...props}>
  <div className={classnames('leader-board-loader__buffering-dots')} />
  <div className={classnames('leader-board-loader__buffer')} />
  <div className={classnames('leader-board-loader__primary')}>
    <span className={classnames('leader-board-loader__inner')} />
  </div>
  <div className={classnames('leader-board-loader__secondary')}>
    <span className={classnames('leader-board-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
