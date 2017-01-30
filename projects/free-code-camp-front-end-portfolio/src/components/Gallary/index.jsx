import React, { PropTypes, Children } from 'react';

import Item from './Item';
import './gallary.scss';

const Gallary = ({ children, ...props }) => (<div {...props}>{
  Children.map(children, child => (<Item>{child}</Item>))
}</div>);

Gallary.propTypes = { children: PropTypes.node };

export default Gallary;
