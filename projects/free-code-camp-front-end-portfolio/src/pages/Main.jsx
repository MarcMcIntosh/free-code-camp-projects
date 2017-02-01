import React, { PropTypes } from 'react';

const Main = ({ children }) => (
  <div>
    {children}
  </div>
);

Main.propTypes = { children: PropTypes.node };

export default Main;
