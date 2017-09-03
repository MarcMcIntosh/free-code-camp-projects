import React from 'react';
import { node } from 'prop-types';
import cx from './cx';

const Card = ({ children, ...props }) => (<div
  className={cx('card')}
  {...props}
>{children}</div>);

Card.propTypes = { children: node.isRequired };

export default Card;
