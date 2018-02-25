import React from 'react';
import { func, string, bool } from 'prop-types';
import { fieldPropTypes } from 'redux-form';

const CheckBox = ({ input, label, value, id }, { classnames }) => {
  console.log(input);
  return (<div className={classnames('field')}>
    <div className={classnames('checkbox')}>
      <input className={classnames('checkbox__native-control')} {...input} type="radio" value={value} />
      <div className={classnames('checkbox__background')}>
        <svg className={classnames('checkbox__checkmark')} viewBox="0 0 24 24">
          <path className={classnames('checkbox__checkmark-path')} fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div className={classnames('checkbox__mixedmark')} />
      </div>
    </div>

    <label htmlFor={id}>{label}</label>
  </div>);
};

CheckBox.propTypes = {
  ...fieldPropTypes,
  label: string.isRequired,
  disabled: bool,
};

CheckBox.defaultProps = { disabled: false };
CheckBox.contextTypes = { classnames: func.isRequired };

export default CheckBox;
