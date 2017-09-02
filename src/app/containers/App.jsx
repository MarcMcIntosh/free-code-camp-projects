import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import '../styles/index.scss';
// const App = ({ children }) => (<div>{children}</div>);

const App = ({ route }) => (<div>
  <h1>Main</h1>
  <div>{renderRoutes(route.routes)}</div>
</div>);

App.propTypes = {
  route: PropTypes.any.isRequired,
};

export default App;
