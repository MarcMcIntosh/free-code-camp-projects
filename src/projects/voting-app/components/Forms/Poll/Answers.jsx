import React from 'react';
import { Field, fieldArrayPropTypes } from 'redux-form';
import { func } from 'prop-types';
import renderAnswer from './renderAnswer';

const Answers = ({
  fields,
  meta: { error },
  ...props
}, {
  classnames,
}) => (<div {...props}>
  <h2 className={classnames('recipe-box-form__title')}>Answers</h2>

  {fields.map((ingredient, index) => {
    const k = `ingredients[${index}]`;
    return (<Field key={k} name={k} type="text" component={renderAnswer} label={`Ingredient #${index + 1}`} onClick={() => fields.remove(index)} />);
  })}
  {error && <span className="error">{error}</span>}

  <button
    className={classnames('form_action')}
    title="Add Ingredient"
    type="button"
    tabIndex="0"
    onClick={() => fields.push()}
  >Add Answer<i className={classnames('form_action--icon')}>playlist_add</i> </button>
</div>);

Answers.propTypes = { ...fieldArrayPropTypes };

Answers.contextTypes = { classnames: func.isRequired };

export default Answers;
