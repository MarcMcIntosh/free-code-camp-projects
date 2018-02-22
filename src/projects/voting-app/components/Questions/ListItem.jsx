import React from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ text, href, secondary }, { classnames }) => (<Link to={href} role="listitem" className={classnames('list-item')} title="question" tabIndex="0">
  <span className={classnames('list-item__text')}>
    {text}
    <span className={classnames('list-item__text__secondary')}>
      {new Date(secondary).toLocaleDateString()}
    </span>
  </span>
</Link>);

ListItem.propTypes = {
  text: string.isRequired,
  secondary: string.isRequired,
  href: string.isRequired,
};

ListItem.contextTypes = { classnames: func.isRequired };

export default ListItem;
