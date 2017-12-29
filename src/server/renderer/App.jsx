import React from 'react';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from '../../common/routes';
import Container from '../../common/Container';

const App = props => (<Container><StaticRouter {...props}>{renderRoutes(routes)}</StaticRouter></Container>);

export default App;
