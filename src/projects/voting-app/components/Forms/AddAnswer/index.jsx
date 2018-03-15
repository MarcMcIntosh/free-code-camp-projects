import React from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import { Link } from 'react-router-dom';
import renderField from '../renderField';
import validate from '../../../util/validateNewAnswer';

const AddAnswerForm = ({
  question,
  error,
  handleSubmit,
  pristine,
  reset,
  submitting,
  href,
}, {
  classnames,
}) => (<form onSubmit={handleSubmit} className={classnames('card', 'form')}>
  <header className={classnames('card__primary')}>
    <h1 className={classnames('card__title')}>{question}</h1>
    <h2 className={classnames('card__subtitle')}>
      <Link to={href}>{href}</Link>
    </h2>
  </header>

  <Field name="answer" label="Add Answer" component={renderField} />

  <section className={classnames('card__actions')}>

    <button type="submit" disabled={submitting || error} className={classnames('card__action', 'card__action--primary')}>Submit</button>

    <button type="button" disabled={pristine || submitting} onClick={reset} className={classnames('card__action', 'card__action--accent')}>Clear</button>

  </section>
</form>);

AddAnswerForm.propTypes = { ...propTypes, question: string.isRequired, href: string.isRequired };
AddAnswerForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'voting-app-add-answer',
  validate,
})(AddAnswerForm);
