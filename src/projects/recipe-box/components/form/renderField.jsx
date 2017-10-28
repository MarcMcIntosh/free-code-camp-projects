import React from 'react';
import { propTypes } from 'redux-form';
import { func } from 'prop-types';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderField.propTypes = { ...propTypes };
renderField.contextTypes = { classnames: func.isRequired };

export default renderField;
