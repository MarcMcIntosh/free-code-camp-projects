import React from 'react';
import { node } from 'prop-types';
import cx from './cx';

// old title = cx({ 'mdc-card__title': true, 'mdc-card__title--large': true });

const Title = ({ children, ...props }) => (<h1 className={cx('title')} {...props}>{children}</h1>);

Title.propTypes = { children: node.isRequired };

export default Title;
