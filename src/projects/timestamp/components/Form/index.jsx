import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field, propTypes } from 'redux-form';
import RenderDatePicker from './RenderDatePicker';
import RenderUTC from './RenderUTC';
// import validate from './validate';

const DateForm = ({ handleSubmit }, { classnames }) => (<form onSubmit={handleSubmit}>
  <Field name="unix" component={RenderUTC} />
  <div>
    <label className={classnames('label')} htmlFor="datestring">Date Picker</label>
    <Field name="natural" component={RenderDatePicker} showTime={false} />
  </div>
  <button type="submit">submit</button>
</form>);

DateForm.propTypes = propTypes;

DateForm.contextTypes = { classnames: func.isRequired };

export default reduxForm({ form: 'timestamp' })(DateForm);
