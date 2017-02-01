import React from 'react';
import Container, {
  Buttons,
  Display,
  ErrorMessage,
  task,
} from '../../lib/calculator';
import './Calculator.scss';

const Calculator = () => (
  <Container>
    <ErrorMessage />
    <Display />
    <Buttons />
  </Container>
);

export default Calculator;
export { task };
