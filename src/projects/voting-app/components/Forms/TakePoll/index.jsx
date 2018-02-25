import React from 'react';
import {
  func,
  // bool,
  string,
  array,
} from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  // Field,
  reduxForm,
  propTypes,
} from 'redux-form';

import AnswerRadio from './AnswerRadio';
// import validate from './validate';

// return <Field key={id} value={id} id={id} name={key} label={value} checked={values && values[key] === id} component="input" type="radio" />);
// {answers.map(({ id, key, value }) => (<AnswerRadio key={id} value={id} name={key} label={value} />))}

const TakePollForm = ({
  handleSubmit,
  submitting,
  error,
  questionID,
  questionText,
  // hasVoted,
  // authenticated,
  answers,
  // values,
}, { classnames }) => (<form onSubmit={handleSubmit} className={classnames('card', 'form')} id={questionID}>
  <section className={classnames('card__primary')}>
    <h1 className={classnames('card__title')}>{questionText}</h1>
  </section>
  <section>
    {answers.map(({ id, value }) => (<AnswerRadio key={id} value={id} label={value} />))}
  </section>
  <section className={classnames('card__actions')}>

    <button type="submit" disabled={submitting || error} className={classnames('card__action', 'card__action--primary')}>Submit Answer</button>

  </section>
</form>);

TakePollForm.propTypes = {
  ...propTypes,
  questionID: string.isRequired,
  questionText: string.isRequired,
  answers: array.isRequired,
  // hasVoted: bool.isRequired,
};

TakePollForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'voting-app/vote',
})(TakePollForm);
