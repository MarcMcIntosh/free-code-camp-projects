import React, { PropTypes } from 'react';

const Href = ({ text, src, ...props }) => (
  <a href={src} target="_blank" rel="noopener noreferrer" {...props}>{text || src}</a>
);

const { string } = PropTypes;
Href.propTypes = { src: string, text: string };

export default Href;
