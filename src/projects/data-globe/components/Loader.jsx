import React from 'react';
import { func } from 'prop-types';

const Loader = (props, {
  classnames,
}) => (<div className={classnames('data-globe-loader')} role="progressbar" {...props}>
  <div className={classnames('data-globe-loader__buffering-dots')} />
  <div className={classnames('data-globe-loader__buffer')} />
  <div className={classnames('data-globe-loader__primary')}>
    <span className={classnames('data-globe-loader__inner')} />
  </div>
  <div className={classnames('data-globe-loader__secondary')}>
    <span className={classnames('data-globe-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
