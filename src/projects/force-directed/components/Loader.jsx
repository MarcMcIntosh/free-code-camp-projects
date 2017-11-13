import React from 'react';
import { func } from 'prop-types';

const Loader = (props, {
  classnames,
}) => (<div className={classnames('force-directed-loader')} role="progressbar" {...props}>
  <div className={classnames('force-directed-loader__buffering-dots')} />
  <div className={classnames('force-directed-loader__buffer')} />
  <div className={classnames('force-directed-loader__primary')}>
    <span className={classnames('force-directed-loader__inner')} />
  </div>
  <div className={classnames('force-directed-loader__secondary')}>
    <span className={classnames('force-directed-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
