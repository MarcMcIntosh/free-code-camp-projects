import React from 'react';
import { shape, func, string, bool } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const RenderDatePicker = ({ input: { onChange, ...input }, format, placeholder }) => (<div>
  <label htmlFor={input.name}>Date string</label>
  <DatePicker
    {...input}
    placeholder={placeholder}
    dateFormat={format}
    type="button"
    selected={input.value ? moment(input.value, format) : null}
    onChange={val => onChange(moment(val).format(format))}
  />
</div>);

RenderDatePicker.propTypes = {
  input: shape({ onChange: func.isRequired, value: string.isRequired, name: string.isRequired }).isRequired,
  meta: shape({ active: bool.isRequired }).isRequired,
  placeholder: string,
  format: string,
};

RenderDatePicker.defaultProps = {
  placeholder: '',
  format: 'LLL',
};

RenderDatePicker.contextTypes = { classnames: func.isRequired };

export default RenderDatePicker;
