import React, { PropTypes } from 'react';

const Container = ({ children }) => (
  <div className="app__container">
    {children}
  </div>
);

Container.propTypes = { children: PropTypes.node };

export default Container;
