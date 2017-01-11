import React, { PropTypes } from 'react';

const UserImg = (props) => {
  const { name, logo, url, ...rest } = props;
  return (<figure {...rest}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logo} role="presentation" />
    </a>
    <figcaption><h2>{name}</h2></figcaption>
  </figure>);
};

UserImg.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  url: PropTypes.string,
};

export default UserImg;
