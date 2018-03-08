import React from 'react';
import { bool, func, string, number, oneOfType, node } from 'prop-types';

const Answer = ({
  disabled,
  value,
  name,
  checked,
  onChange,
  label,
}, {
  classnames,
}) => (<div className={classnames('answer')}>
  <div className={classnames('checkbox', disabled && 'checkbox--disabled')}>
    <input
      disabled={disabled}
      className={classnames('checkbox__native-control')}
      type="checkbox"
      name={name}
      value={value}
      id={value}
      onChange={onChange}
      checked={checked}
    />
    <div className={classnames('checkbox__background')}>
      <svg className={classnames('checkbox__checkmark')} viewBox="0 0 24 24">
        <path className={classnames('checkbox__checkmark__path')} fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>

      <div className={classnames('checkbox__mixedmark')} />
    </div>
  </div>

  <label htmlFor={value} className={classnames('answer__label')}>{label}</label>
</div>);

Answer.propTypes = {
  disabled: bool,
  checked: bool,
  label: node,
  value: oneOfType([string.isRequired, number.isRequired]).isRequired,
  name: oneOfType([string.isRequired, number.isRequired]).isRequired,
  onChange: func.isRequired,
};

Answer.defaultProps = {
  disabled: false,
  checked: false,
  label: '',
};

Answer.contextTypes = { classnames: func.isRequired };

export default Answer;
