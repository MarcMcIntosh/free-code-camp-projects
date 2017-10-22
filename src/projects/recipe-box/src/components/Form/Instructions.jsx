import React from 'react';

const renderInstructions = (field, { classnames }) => (<div className={classnames('recipe-box__instructions')}>

  {field.meta.touched && field.meta.warning && <span className={classnames('recipe-box__error')}>{field.meta.error}</span>}

  <textarea className={classnames('recipe-box__textarea')} {...field.input} />

</div>);

export default renderInstructions;
