import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App from './index';
import './src/styles/main.scss';

const Test = () => (
  <App>Hello World</App>
);

render(<Test />, document.getElementById('App'));
