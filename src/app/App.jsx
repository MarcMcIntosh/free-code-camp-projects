import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '../common/Container';

const App = props => (<Container Router={BrowserRouter} {...props} />);

export default App;
