import React from 'react';
import { node, func } from 'prop-types';

const Cell = ({
  children,
  ...props
}, {
  classnames,
}) => (<td className={classnames('calculator__cell')}>
  <button tabIndex="0" type="button" {...props}>{children}</button>
</td>);

Cell.propTypes = { children: node.isRequired };

Cell.contextTypes = { classnames: func.isRequired };

export default Cell;
