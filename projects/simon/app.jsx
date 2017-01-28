import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import ReactDOM from 'react-dom';
import Simon, {
  KeyBoard,
  Wave,
  Mode,
  Round,
  StartStop,
  Volume,
} from './index';

require('./src/styles/main.scss');

const App = () => (<Simon>
  <h3>Round: <Round /></h3>
  <h4>Difficulty: <Mode /></h4>
  <StartStop />
  <b>Sound Wave: <Wave /></b>
  <div>Vol: <Volume /></div>
  <KeyBoard className="keys" />
</Simon>);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
