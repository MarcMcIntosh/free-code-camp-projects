import React from 'react';
import { func } from 'prop-types';

const Loader = (props, {
  classnames,
}) => (<div className={classnames('heat-map-loader')} role="progressbar" {...props}>
  <div className={classnames('heat-map-loader__buffering-dots')} />
  <div className={classnames('heat-map-loader__buffer')} />
  <div className={classnames('heat-map-loader__primary')}>
    <span className={classnames('heat-map-loader__inner')} />
  </div>
  <div className={classnames('heat-map-loader__secondary')}>
    <span className={classnames('heat-map-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
