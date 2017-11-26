import React from 'react';
import { func, string, number } from 'prop-types';

const User = ({ src, name, points, index }, { classnames }) => (<li className={classnames('leader-board-user')}>
  <img src={src} alt="" className={classnames('leader-board-user__start-detail')} />
  <span className={classnames('leader-board-user__text')}>
    {name}
    <span className={classnames('leader-board-user__text__secondary')}>{points}</span>
  </span>
  <span
    className={classnames('leader-board-user__end-detail')}
  ><span className={classnames('leader-board-user__text')}># {index}</span>
  </span>
</li>);

User.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
  points: number.isRequired,
  index: number.isRequired,
};

User.contextTypes = { classnames: func.isRequired };

export default User;
