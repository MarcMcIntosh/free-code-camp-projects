import React from 'react';
import TweetButton from './components/TweetButton';
import NextButton from './components/NextButton';
import Display from './components/Display';

const QuoteMachine = () => (<div className="quote-machine">
  <div className="mdc-card">
    <Display
      className="mdc-card__primary"
      classnames={{
        quote: 'mdc-card__title mdc-card__title--large',
        author: 'mdc-card__subtitle',
      }}
    />

    <section className="mdc-card__actions quote-machine__buttons">
      <TweetButton
        className="mdc-button mdc-button--raised mdc-button--primary"
      />
      <NextButton className="mdc-button mdc-button--raised mdc-button--accent" />
    </section>
  </div>
</div>);

export default QuoteMachine;
