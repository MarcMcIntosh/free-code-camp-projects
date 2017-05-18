import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App, { DataGlobe } from './index';
import './styles/test.scss';

const Test = (<App><DataGlobe /></App>);

render(Test, document.getElementById('App'));
