import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App from './index';
import './styles/test.scss';

const Test = () => (
  <App className="foo-bar">Hello World</App>
);

render(<Test />, document.getElementById('App'));