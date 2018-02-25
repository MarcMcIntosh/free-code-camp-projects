import React from 'react';
import {
  // func,
  string,
} from 'prop-types';
import { fieldPropTypes } from 'redux-form';

/*
const AnswerRadio = ({ name, value, label }) => (<div>
  <Field name={name} id={value} component="input" type="radio" value={value} />
  <label htmlFor={value}>{label}</label>
</div>);
*/
const AnswerRadio = ({ label, value, ...input }) => (<div>
  <input {...input} id={value} />
  <label htmlFor={value}>{label}</label>
</div>);
/*
const AnswerRadio = ({
  input: {
    // checked,
    // name,
    // onBlur,
    // onChange,
    // onFocus,
    // value,
    ...input
  },
  label,
  id,
}) => (<div>
  <input id={id} component="input" type="radio" {...input} />
  <label htmlFor={id}>{label}</label>
</div>);
*/

AnswerRadio.propTypes = {
  ...fieldPropTypes,
  label: string.isRequired,
  value: string.isRequired,
};

// AnswerRadio.contextTypes = { classnames: func.isRequired };

export default AnswerRadio;
