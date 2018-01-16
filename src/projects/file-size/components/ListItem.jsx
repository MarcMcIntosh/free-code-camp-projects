import React from 'react';
import { func, string, number } from 'prop-types';
import { format } from 'd3-format';
import Img from '../assets/ic_content_copy_48px.svg';

function bytesToString(bytes) {
  const fmt = format('.0f');
  const kB = 1024;
  const MB = kB ** 2;
  const GB = kB ** 3;
  if (bytes < kB) { return fmt(bytes) + 'B'; }
  if (bytes < MB) { return fmt(bytes / kB) + 'kB'; }
  if (bytes < GB) { return fmt(bytes / MB) + 'MB'; }
  return fmt(bytes / GB) + 'GB';
}

const ListItem = ({ name, size }, { classnames }) => (<li className={classnames('list-item')}>
  <div className={classnames('list-item__start-detail')}><img src={Img} alt="" /></div>
  <span className={classnames('list-item__text')}>
    {name}
    <span className={classnames('list-item__secondary')}>{bytesToString(size)}</span>
  </span>
</li>);

ListItem.propTypes = { name: string.isRequired, size: number.isRequired };
ListItem.contextTypes = { classnames: func.isRequired };

export default ListItem;
