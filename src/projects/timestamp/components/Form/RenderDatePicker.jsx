import React from 'react';
import { shape, func, string } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const RenderDatePicker = ({ input: { onChange, ...input }, format, placeholder }) => (<DatePicker
  {...input}
  placeholder={placeholder}
  dateFormat={format}
  selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
  onChange={val => onChange(moment(val).format(format))}
/>);

RenderDatePicker.propTypes = {
  input: shape({ onChange: func.isRequired, value: string.isRequired }).isRequired,
  placeholder: string,
  format: string,
};

RenderDatePicker.defaultProps = {
  placeholder: '',
  format: 'LLL',
};

export default RenderDatePicker;
