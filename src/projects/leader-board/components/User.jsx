import React from 'react';
import { func, string } from 'prop-types';

const User = ({ href, src }, { classnames }) => (<li classNames={classnames('leader-board-user')}>
  <span
    classNames={classnames('leader-board-user__start-detail')}
    role="presentation"
  > <img alt="" src={src} />
  </span>
  <span classNames={classnames('leader-board-user__text')}>
    Thing 1
    <span classNames={classnames('leader-board-user__text__secondary')}>
      Thing 2
    </span>
  </span>
  <a
    href={href}
    classNames={classnames('leader-board-user__end-detail')}
    aria-label="View more information"
    title="More info"
  >info</a>
</li>);

User.propTypes = {
  src: string.isRequired,
  href: string.isRequired,
};

User.contextTypes = { clasnames: func.isRequired };

export default User;
