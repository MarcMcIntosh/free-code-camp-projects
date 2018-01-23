import React from 'react';
import { func } from 'prop-types';

const Loader = (props, { classnames }) => {
  const dots = Array.from({ length: 3 }, (d, i) => ({ key: i, cn: classnames('loader__dot', `loader__dot--${i + 1}`) }));
  return (<h2 className={classnames('loader')}>Loading {dots.map(({ key, cn }) => (<span key={key} className={cn}>.</span>))}</h2>);
};

Loader.contextTypes = { classnames: func.isRequired };

export default Loader;
