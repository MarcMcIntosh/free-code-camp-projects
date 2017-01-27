import React from 'react';
import ReactDOM from 'react-dom';
import Simon, { KeyBoard, Display } from './index';

require('./src/styles/main.scss');

const App = () => (<Simon>
  <Display className="display" />
  <KeyBoard className="keys" />
</Simon>);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
