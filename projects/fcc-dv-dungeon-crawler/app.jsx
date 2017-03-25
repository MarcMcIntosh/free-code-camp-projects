import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Game, { Board } from './index';
import './styles/test.scss';

const Test = (<Game><Board /></Game>);

render(Test, document.getElementById('App'));
