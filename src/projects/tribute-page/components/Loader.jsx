import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => (<div className={classnames('tribute-page-loader')} role="progressbar" {...props}>
  <div className={classnames('tribute-page-loader__buffering-dots')} />
  <div className={classnames('tribute-page-loader__buffer')} />
  <div className={classnames('tribute-page-loader__primary')}>
    <span className={classnames('tribute-page-loader__inner')} />
  </div>
  <div className={classnames('tribute-page-loader__secondary')}>
    <span className={classnames('tribute-page-loader__inner')} />
  </div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
