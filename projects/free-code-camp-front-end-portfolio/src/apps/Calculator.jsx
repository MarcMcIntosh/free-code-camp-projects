import React from 'react';
import Container, {
  Buttons,
  Display,
  task,
} from '../../lib/calculator';
import './Calculator.scss';

const Calculator = () => (
  <Container className="calculator">
    <Display className="calculator__display" />
    <Buttons className="calculator__buttons" />
  </Container>
);

export default Calculator;
export { task };
