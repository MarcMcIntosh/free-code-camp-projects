import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Game, { BoardWithFloor } from './index';
import './styles/test.scss';

const Test = (<Game>
  <BoardWithFloor />
</Game>);

render(Test, document.getElementById('App'));
