import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App, {
  Menu,
  Display,
  // Recipes,
} from './index';
import './styles/test.scss';

const Test = (<App>
  <Menu />
  <Display />
</App>);

render(Test, document.getElementById('App'));
