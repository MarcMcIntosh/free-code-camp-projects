import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Game, { Board, Torch, BoardWithFloor } from './index';
import './styles/test.scss';

const Test = (<Game>
  <Torch />
  <Board />
  <BoardWithFloor />
</Game>);

render(Test, document.getElementById('App'));
