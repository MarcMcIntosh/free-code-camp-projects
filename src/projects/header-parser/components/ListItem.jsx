import React from 'react';
import { node, func } from 'prop-types';

const ListItem = ({ children }, { classnames }) => (<li className={classnames('list__item')}>{children}</li>);

ListItem.propTypes = { children: node.isRequired };

ListItem.contextTypes = { classnames: func.isRequired };

export default ListItem;
