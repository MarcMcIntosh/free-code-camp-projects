import React from 'react';
import { object, func, oneOf } from 'prop-types';

const sortFunc = ([, { ...a }], [, { ...b }]) => {
  const n = -(a.stream && !b.stream) || -(a.stream && b.stream && a.name < b.name) || (a.error && !b.error) || (a.name < b.name);
  return Number(n);
};


const UserList = ({ users, display }, { classnames }) => {
  const userFilter = ([, { stream }]) => (display === 'all') || (display === 'online' && !!(stream)) || (display === 'offline' && !(stream));

  return (<ul className={classnames('twitch-tv__user-list')}>
    {Object.entries(users).filter(userFilter).sort(sortFunc).map(([key, { ...rest }]) => (<li key={key} className={classnames('twitch-tv__user-item')}>
      {rest.name}
    </li>))}
  </ul>);
};

UserList.propTypes = {
  users: object.isRequired,
  display: oneOf(['all', 'online', 'offline']).isRequired,
};

UserList.contextTypes = { classnames: func.isRequired };

export default UserList;
