import React from 'react';
import { Route } from 'react-router';
import { object } from 'prop-types';
import { Home, About } from './pages';
import Container from './containers/App';

const Routes = ({ match }) => (<Container>
  <Route exact path={match.path} component={Home} />
  <Route path={`${match.path}/about`} component={About} />
</Container>);

Routes.propTypes = {
  match: object,
};
Routes.defaultProps = { match: { path: '/tribute-page' } };

export default Routes;
