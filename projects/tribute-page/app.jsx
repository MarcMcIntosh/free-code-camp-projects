import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Tribute, { Quotes } from './index';

require('./src/styles/main.scss');

const list = [
  'And lowers it when he\'s going to dodge, m\'lady.',
  'Hold the door....',
  'holdthedoor...',
  'holthdor...',
  'holdor...',
  'hodor...',
  'hodor...',
  'hodor.',
];

const App = () => (
  <Tribute>
    <Quotes list={list} />
  </Tribute>
);


ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
