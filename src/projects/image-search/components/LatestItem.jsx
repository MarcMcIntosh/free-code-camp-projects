import React from 'react';
import { string, number, func } from 'prop-types';

const LatestItem = ({ term, time }, { classnames }) => {
  const timeStamp = new Date(time);
  return (<li className={classnames('list-item')}>
    <span className={classnames('list-item__text')}>{term}
      <span className={classnames('list-item__text__secondary')}>{timeStamp.toString()}</span>
    </span>
  </li>);
};

LatestItem.propTypes = { term: string.isRequired, time: number.isRequired };

LatestItem.contextTypes = { classnames: func.isRequired };

export default LatestItem;
