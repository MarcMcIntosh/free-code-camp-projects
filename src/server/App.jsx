import React from 'react';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';
import Container, { favicon } from '../common/Container';

const App = props => (<Container><StaticRouter {...props}>{renderRoutes(routes)}</StaticRouter></Container>);

export default App;
export { favicon };
