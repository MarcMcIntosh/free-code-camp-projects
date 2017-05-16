import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App, { TheForce } from './index';
import './styles/test.scss';

const Test = (<App><TheForce /></App>);

render(Test, document.getElementById('App'));
