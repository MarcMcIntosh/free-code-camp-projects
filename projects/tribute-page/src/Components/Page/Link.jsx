import React from 'react';

const Link = props => (
  <a
    className="tribute__link"
    href="http://gameofthrones.wikia.com/wiki/Hodor" target="_blank"
    rel="noopener noreferrer"
  >{props.text}</a>
);

Link.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Link;
