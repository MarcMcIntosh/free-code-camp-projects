import React from 'react';
import Container from './src/Container';
import Buttons from './src/components/CalculatorButtons';
import Display from './src/components/Display';
import ErrorMessage from './src/components/ErrorMessage';

const Calculator = () => (<Container>
  <ErrorMessage />
  <Display />
  <Buttons />
</Container>);


export default Calculator;
