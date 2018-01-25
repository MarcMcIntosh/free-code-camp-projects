import React from 'react';
import { bool, any } from 'prop-types';
// import { fieldPropTypes } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const RenderDateTimePicker = ({ input, showTime }) => (<DatePicker
  {...input}
  selected={input.value ? moment(input.value) : null}
  showTimeSelect={showTime}
  dateFormat="LLL"
  locale="en-gb"
/>);

RenderDateTimePicker.propTypes = { input: any.isRequired, showTime: bool };
RenderDateTimePicker.defaultProps = { showTime: false };

export default RenderDateTimePicker;
