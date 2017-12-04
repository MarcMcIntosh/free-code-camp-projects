import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => (<div className={classnames('quote-machine-loader')} role="progressbar" {...props}>
  <div className={classnames('quote-machine-loader__buffering-dots')} />
  <div className={classnames('quote-machine-loader__buffer')} />
  <div className={classnames('quote-machine-loader__primary')}>
    <span className={classnames('quote-machine-loader__inner')} />
  </div>
  <div className={classnames('quote-machine-loader__secondary')}>
    <span className={classnames('quote-machine-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
