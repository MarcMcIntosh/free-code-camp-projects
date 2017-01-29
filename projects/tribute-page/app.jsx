import React from 'react';
import ReactDOM from 'react-dom';
/* Most of the App should come from index.js */
import Tribute, { Quotes } from './index';
const imageSrc = require('./src/assets/Season_6_hodor_main.jpg');

require('./src/styles/main.scss');

const CONFIG = {
  TITLE: {
    TEXT: {
      TERM: 'Hodor',
      DESC: '--Hodor',
      SRC:'http://gameofthrones.wikia.com/wiki/Hodor',
    },
    TERM: { className: '' },
    DESC: { className: '' },
    SRC: { className: '' },
  },
  IMAGE: {
    className: '',
    src: imageSrc,
  },
  QUOTES: {
    className: '',
    QUOTE: { className: '' },
    list: [
      'And lowers it when he\'s going to dodge, m\'lady.',
      'Hold the door....',
      'holdthedoor...',
      'holthdor...',
      'holdor...',
      'hodor...',
      'hodor...',
      'hodor.',
    ],
  },
};

const App = () => (<Tribute config={CONFIG} />);

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
