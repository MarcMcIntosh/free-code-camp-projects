import React from 'react';
// import { hydrate } from 'react-dom';
import { StaticRouter } from 'react-router';
import Container from '../common/Container';

const App = props => (<Container Router={StaticRouter} {...props} />);

export default App;
