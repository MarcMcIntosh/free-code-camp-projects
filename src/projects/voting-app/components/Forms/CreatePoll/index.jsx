import React from 'react';
import { func } from 'prop-types';
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form';
import renderField from '../renderField';
import Answers from './Answers';
import validate from '../../../util/validatePoll';

const PollForm = ({
  // error,
  handleSubmit,
  pristine,
  reset,
  submitting,
}, {
  classnames,
}) => (<form onSubmit={handleSubmit} className={classnames('card', 'form')}>

  <section className={classnames('card__primary')}>

    <h1 className={classnames('card__title')}>Create Poll</h1>

    <Field name="question" label="Question" type="text" component={renderField} />

    <FieldArray name="answers" component={Answers} />

  </section>

  <section className={classnames('card__actions')}>

    <button type="submit" disabled={submitting} className={classnames('card__action', 'card__action--primary')}>Submit</button>

    <button type="button" disabled={pristine || submitting} onClick={reset} className={classnames('card__action', 'card__action--accent')}>Clear</button>

  </section>

</form>);

PollForm.propTypes = propTypes;
PollForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'voting-app-create-poll',
  validate,
})(PollForm);
