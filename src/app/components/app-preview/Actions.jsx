import React from 'react';
import { node } from 'prop-types';
import cx from './cx';

const Actions = ({ children, ...props }) => (<div className={cx('actions')} {...props}>{children}</div>);

Actions.propTypes = { children: node.isRequired };

export default Actions;
