import React from 'react';
import { hydrate } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './App';

const render = Component => hydrate(<AppContainer><Component /></AppContainer>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const updatedApp = require('./components/App').default; // eslint-disable-line
    render(updatedApp);
  });
}

render(App);
