import React from 'react';
import { func, string, number } from 'prop-types';
import Img from '../assets/ic_content_copy_48px.svg';

const ListItem = ({ name, size }, { classnames }) => (<li className={classnames('list-item')}>
  <div className={classnames('list-item__start-detail')}><img src={Img} alt="" /></div>
  <span className={classnames('list-item__text')}>
    {name}
    <span className={classnames('list-item__secondary')}>{size}</span>
  </span>
</li>);

ListItem.propTypes = { name: string.isRequired, size: number.isRequired };
ListItem.contextTypes = { classnames: func.isRequired };

export default ListItem;
