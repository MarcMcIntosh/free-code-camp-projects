import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import App, { Recipes } from './index';
import './styles/test.scss';

const Test = (<App><Recipes /></App>);

render(Test, document.getElementById('App'));
