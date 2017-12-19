import React from 'react';
import { object, func, oneOf } from 'prop-types';
import UserItem from './UserItem';

const sortFunc = ([, { ...a }], [, { ...b }]) => {
  const s = -!!a.stream - -!!b.stream;
  const e = +!!a.error + -!!b.error;
  const n = -(a.name < b.name) || +(a.name > b.name) || 0;
  return s || e || n;
};


const UserList = ({ users, display }, { classnames }) => {
  const userFilter = ([, { stream }]) => (display === 'all') || (display === 'online' && !!(stream)) || (display === 'offline' && !(stream));

  return (<ul className={classnames('twitch-tv__user-list')}>
    {Object.entries(users).filter(userFilter).sort(sortFunc).map(([key, { ...rest }]) => (<UserItem key={key} {...rest} />))}
  </ul>);
};

UserList.propTypes = {
  users: object.isRequired,
  display: oneOf(['all', 'online', 'offline']).isRequired,
};

UserList.contextTypes = { classnames: func.isRequired };

export default UserList;
