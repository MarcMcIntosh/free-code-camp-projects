import React, { Component } from 'react';
import { fieldPropTypes } from 'redux-form';
import { func, string } from 'prop-types';

class renderIngrdient extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    const { input, onClick, type, label, meta: { touched, error } } = this.props;
    const { classnames } = this.context;
    const cn = classnames({
      'recipe-box-form__textfield': true,
      'recipe-box-form__textfield--upgraded': true,
      'recipe-box-form__textfield--box': true,
      'recipe-box-form__textfield--with-trailing-icon': true,
      'recipe-box-form__textfield--invalid': error || false,
      'recipe-box-form__textfield--focused': this.state.active,
    });
    const ln = classnames('recipe-box-form__line', {
      'recipe-box-form__line--active': this.state.active,
    });

    const lbl = classnames('recipe-box-form__label', {
      'recipe-box-form__label--float-above': input.value || this.state.active,
    });
    return (<div className={cn}>
      <input {...input} type={type} onFocus={() => this.setState({ active: true })} onBlur={() => this.setState({ active: false })} className={classnames('recipe-box-form__input')} />
      <label htmlFor={input.name} className={lbl}>{label}</label>
      <i
        className={classnames('recipe-box-form__icon')}
        tabIndex="0"
        role="button"
        title="Remove ingredient"
        onClick={onClick}
      >close</i>
      <div className={ln} />
      {touched && error && <span className={classnames('recipe-box-form__help')}>{error}</span>}
    </div>);
  }
}

/*
const renderIngrdient = ({
  input,
  type,
  label,
  meta: { touched, error },
  onClick,
}, {
  classnames,
}) => (<div
  className={classnames({
    'recipe-box-form__textfield': true,
    'recipe-box-form__textfield--box': true,
    'recipe-box-form__textfield--with-trailing-icon': true,
    'recipe-box-form__textfield--invalid': error || false,
  })}
>
  <input {...input} type={type} placeholder={label} className={classnames('recipe-box-form__input')} />
  <i
    className={classnames('recipe-box-form__icon')}
    tabIndex="0"
    role="button"
    title="Remove ingredient"
    onClick={onClick}
  >close</i>
  <div className={classnames('recipe-box-form__line')} />
  {touched && error && <span className={classnames('recipe-box-form__help')}>{error}</span>}
</div>);
*/
renderIngrdient.propTypes = {
  ...fieldPropTypes,
  type: string.isRequired,
  onClick: func.isRequired,
};
renderIngrdient.contextTypes = { classnames: func.isRequired };

export default renderIngrdient;
