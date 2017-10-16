import React from 'react';

const renderInstructions = field => (<div className="recipe-box__instructions">

  {field.meta.touched && field.meta.warning && <span className="recipe-box__error">{field.meta.error}</span>}

  <textarea className="recipe-box__textarea" {...field.input} />

</div>);

export default renderInstructions;
