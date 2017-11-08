import React from 'react';
import { func } from 'prop-types';

const Loader = (props, {
  classnames,
}) => (<div className={classnames('bar-chart-loader')} role="progressbar" {...props}>
  <div className={classnames('bar-chart-loader__buffering-dots')} />
  <div className={classnames('bar-chart-loader__buffer')} />
  <div className={classnames('bar-chart-loader__primary')}>
    <span className={classnames('bar-chart-loader__inner')} />
  </div>
  <div className={classnames('bar-chart-loader__secondary')}>
    <span className={classnames('bar-chart-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
