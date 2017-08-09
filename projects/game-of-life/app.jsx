import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, { Game, TopMenu, BottomMenu } from './index';
import './styles/test.scss';

const Test = (<Container>
  {/* <Settings /> */}
  <TopMenu />
  <Game />
  <BottomMenu />
</Container>);

render(Test, document.getElementById('App'));
