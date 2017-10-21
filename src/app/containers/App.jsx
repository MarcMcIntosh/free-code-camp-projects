import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import '../styles/index.scss';
// import SideBar from '../components/SideBar';
// const App = ({ children }) => (<div>{children}</div>);

const App = ({ route }) => (<div className="container">
  {/* <SideBar /> */}
  {renderRoutes(route.routes)}
</div>);

App.propTypes = {
  route: PropTypes.any.isRequired,
};

export default App;
