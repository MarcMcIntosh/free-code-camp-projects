import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

const render = Component => hydrate(<Component />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App.jsx', () => {
    const updatedApp = require('./App').default; // eslint-disable-line
    render(updatedApp);
  });
}

render(App);
