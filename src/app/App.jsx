import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';
import Container from '../common/Container';

const App = () => (<Container>
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
</Container>);

export default App;
