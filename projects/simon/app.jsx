import React from 'react';
import ReactDOM from 'react-dom';
import Simon, { KeyBoard, Wave, Mode, Round, StartStop } from './index';

require('./src/styles/main.scss');

const App = () => (<Simon>
  <Round />
  <Mode />
  <StartStop />
  <Wave />
  <KeyBoard className="keys" />
</Simon>);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
