import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, { Game, Settings } from './index';
import './styles/test.scss';

const Test = (<Container>
  <Settings />
  <Game />
</Container>);

render(Test, document.getElementById('App'));
