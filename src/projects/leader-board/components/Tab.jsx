import React from 'react';
import { node, func, string, bool } from 'prop-types';

const Tab = ({ onClick, children, value, active, ...props }, { classnames }) => (<a
  className={classnames('leader-board__tab', active && 'leader-board__tab--active')}
  role="presentation"
  onClick={(event) => { event.preventDefault(); return onClick(value); }}
  {...props}
>{children}</a>);

Tab.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
  value: string.isRequired,
  active: bool,
};


Tab.defaultProps = { active: false };

Tab.contextTypes = { classnames: func.isRequired };

export default Tab;
