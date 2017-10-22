import React from 'react';
import { func } from 'prop-types';
import { propTypes } from 'redux-form';

const renderInstructions = ({
  cx,
  input,
  meta: { touched, warning },
}) => (<div className={cx('recipe-box__instructions')}>

  {touched && warning && <span className={cx('recipe-box__error')}>{warning}</span>}

  <textarea className={cx('recipe-box__textarea')} {...input} />

</div>);

renderInstructions.propTypes = {
  cx: func.isRequired,
  ...propTypes,
};

export default renderInstructions;
