import React from 'react';
import { func, number, string, oneOfType } from 'prop-types';

const Item = ({ title, text }, { classnames }) => (<li className={classnames('list__item')}>
  <span className={classnames('list__text')}>
    {title}
    <span className={classnames('list__text__secondary')}>{text}</span>
  </span>
</li>);

Item.propTypes = {
  title: string.isRequired,
  text: oneOfType([string, number]).isRequired,
};

Item.contextTypes = { classnames: func.isRequired };

export default Item;
