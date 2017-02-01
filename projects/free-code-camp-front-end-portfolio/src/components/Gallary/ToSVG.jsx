import React, { PropTypes } from 'react';

const ToSVG = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
  >
    <foreignObject width="100%" height="100%">{children}
    </foreignObject>
  </svg>
);

ToSVG.propTypes = { children: PropTypes.node };

export default ToSVG;
