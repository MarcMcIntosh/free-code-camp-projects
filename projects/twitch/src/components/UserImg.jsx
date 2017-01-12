import React, { PropTypes } from 'react';

const UserImg = (props) => {
  const { name, logo, url, ...rest } = props;
  // figure and figcaption look better
  return (<div {...rest}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logo} role="presentation" />
    </a>
    <h2>{name}</h2>
  </div>);
};

UserImg.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  url: PropTypes.string,
};

export default UserImg;
