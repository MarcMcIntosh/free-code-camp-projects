import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => (<div className={classnames('scatterplot-loader')} role="progressbar" {...props}>
  <div className={classnames('scatterplot-loader__buffering-dots')} />
  <div className={classnames('scatterplot-loader__buffer')} />
  <div className={classnames('scatterplot-loader__primary')}>
    <span className={classnames('scatterplot-loader__inner')} />
  </div>
  <div className={classnames('scatterplot-loader__secondary')}>
    <span className={classnames('scatterplot-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
