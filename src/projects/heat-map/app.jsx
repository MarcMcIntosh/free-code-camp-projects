import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, { HeatMap } from './index';
import './styles/test.scss';

const Test = (<Container>
  <HeatMap />
</Container>);

render(Test, document.getElementById('App'));
