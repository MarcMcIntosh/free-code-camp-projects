import React, { PropTypes } from 'react';
import UserImg from './UserImg';

const User = (props) => {
  const { name, logo, game, status, url, ...rest } = props;
  return (<div {...rest}>
    <UserImg url={url} name={name} logo={logo} />
    {(game) ? (<h3>{game}</h3>) : (<h4>offline</h4>)}
    <p>{status}</p>
  </div>);
};

User.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  game: PropTypes.string,
  url: PropTypes.string,
  status: PropTypes.string,
};


export default User;
