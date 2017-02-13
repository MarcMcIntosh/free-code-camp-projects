import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App from './index';


const Test = () => (
  <App>Hello World</App>
);

render(<Test />, document.getElementById('App'));
