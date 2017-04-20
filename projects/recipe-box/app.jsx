import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, { Cakes } from './index';
import './src/styles/test.scss';

const Test = (<Container className="foo-bar">
  <Cakes />
</Container>);

render(Test, document.getElementById('App'));
