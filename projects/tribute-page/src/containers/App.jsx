import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (<div>
  <h2>Tribute page</h2>
  {children}
</div>);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
