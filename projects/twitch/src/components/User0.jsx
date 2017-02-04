import React, { PropTypes } from 'react';
import UserImg from './UserImg';

const User = ({
  name,
  logo,
  game,
  status,
  url,
  className,
  classnames,
}) => (<section className={className} >
    {(game) ? (<h3>{game}</h3>) : (<h4>offline</h4>)}
    <p>{status}</p>
    <UserImg className={classnames.image} url={url} name={name} logo={logo} />
</section>);

const { string, shape } = PropTypes;
User.propTypes = {
  name: string,
  logo: string,
  game: string,
  url: string,
  status: string,
  className: string,
  classnames: shape({
    image: string,
  });
};


export default User;
