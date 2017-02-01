import React from 'react';
import Container, {
  TweetButton,
  NextButton,
  Display,
  task,
} from '../../lib/quote-machine';
import './QuoteMachine.scss';

const QuoteMachine = () => (
  <Container className="quote-machine">
    <TweetButton />
    <NextButton />
    <Display />
  </Container>
);

export default QuoteMachine;
export { task };
