import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field, propTypes } from 'redux-form';
import RenderDatePicker from './RenderDatePicker';
import RenderUTC from './RenderUTC';
// import validate from './validate';

const DateForm = ({ handleSubmit }, { classnames }) => (<form onSubmit={handleSubmit} className={classnames('card')}>
  <section className={classnames('card__primary')}>
    <Field name="natural" component={RenderDatePicker} showTime={false} placeholder="Click To Select" />
    <Field name="unix" component={RenderUTC} />
  </section>
  <section className={classnames('card__actions')}>
    <button className={classnames('card__action')} type="submit">submit</button>
  </section>
</form>);

DateForm.propTypes = propTypes;

DateForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({ form: 'timestamp' })(DateForm);
