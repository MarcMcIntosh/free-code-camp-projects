import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => (<div className={classnames('local-weather-loader')} role="progressbar" {...props}>
  <div className={classnames('local-weather-loader__buffering-dots')} />
  <div className={classnames('local-weather-loader__buffer')} />
  <div className={classnames('local-weather-loader__primary')}>
    <span className={classnames('local-weather-loader__inner')} />
  </div>
  <div className={classnames('local-weather-loader__secondary')}>
    <span className={classnames('local-weather-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
