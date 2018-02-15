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
}) => (<form onSubmit={handleSubmit} className={classnames('form')}>
  <Field name="question" label="Question" type="text" component={renderField} />
  <FieldArray name="answers" component={Answers} />
  <div>
    <button type="submit" disabled={submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
  </div>
</form>);

PollForm.propTypes = propTypes;
PollForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({
  form: 'voting-app-create-poll',
  validate,
})(PollForm);
