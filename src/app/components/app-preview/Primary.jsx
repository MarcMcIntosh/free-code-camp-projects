import React from 'react';
import { node } from 'prop-types';
import cx from './cx';

const Primary = ({ children, ...props }) => (<div
  className={cx('primary')}
  {...props}
>{children}</div>);

Primary.propTypes = { children: node.isRequired };

export default Primary;
