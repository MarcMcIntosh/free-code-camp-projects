import React from 'react';

const Li = ({ type, text, index }) => (
  <li key={`${type}:${index}`}><b>{type}</b>{' '}{text}</li>
);

Li.propTypes = {
  type: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default Li;
