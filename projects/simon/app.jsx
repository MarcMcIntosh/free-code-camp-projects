import React from 'react';
import ReactDOM from 'react-dom';
import Simon, { Mode, Wave, KeyBoard } from './index';

require('./src/styles/main.scss');

const App = () => (<Simon>
  <Mode />
  <Wave />
  <KeyBoard />
</Simon>);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
