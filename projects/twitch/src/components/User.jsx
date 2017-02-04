import React, { PropTypes } from 'react';

const User = ({
  name,
  logo,
  game,
  status,
  url,
  className,
  classnames,
}) => (<div className={className} >
  <section className={classnames.header}>
    <h1 className={classnames.name}>{name}</h1>
    <h2 className={classnames.game}>{game || 'Off-line'}</h2>
  </section>
  <section className={classnames.status}>
    {status}
  </section>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={logo} role="presentation" className={classnames.image} />
  </a>
</div>);

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
    game: string,
    header: string,
    name: string,
    status: string,
  }),
};


export default User;
