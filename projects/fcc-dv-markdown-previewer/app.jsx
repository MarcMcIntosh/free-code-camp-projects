import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, { UserInput, Output } from './index';
import './src/styles/main.scss';

const Test = () => (
  <Container>
    <UserInput />
    <Output stylesheets={['/styles.css']} />
  </Container>
);

render(<Test />, document.getElementById('App'));
