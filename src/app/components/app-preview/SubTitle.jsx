import React from 'react';
import { node } from 'prop-types';
import cx from './cx';

const SubTitle = ({ children, ...props }) => (<h2 className={cx('mdc-card__subtitle')} {...props}>{children}</h2>);

SubTitle.propTypes = { children: node.isRequired };

export default SubTitle;
