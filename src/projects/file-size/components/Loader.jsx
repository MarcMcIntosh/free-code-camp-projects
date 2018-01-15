import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => (<div className={classnames('loader')} role="progressbar" {...props}>
  <div className={classnames('loader__buffering-dots')} />
  <div className={classnames('loader__buffer')} />
  <div className={classnames('loader__primary')}><span className={classnames('loader__inner')} /></div>
  <div className={classnames('loader__secondary')}><span className={classnames('loader__inner')} /></div>
</div>);

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
