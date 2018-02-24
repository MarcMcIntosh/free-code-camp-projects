import React from 'react';
import { Field, fieldArrayPropTypes } from 'redux-form';
import { func } from 'prop-types';
import renderAnswer from './renderAnswer';

const Answers = ({
  fields,
  meta: { error, dirty },
  ...props
}, {
  classnames,
}) => (<div {...props}>
  <section className={classnames('card__primary')}>
    <button className={classnames('button', 'button--raised', dirty && error && 'button--accent')} title="Add Answer" type="button" tabIndex="0" onClick={() => fields.push()}>Add Answers</button>

    <span className={classnames('card__subtitle', 'form__helptext', dirty && error && 'form__helptext--validation-msg')}>{error}</span>
  </section>
  {fields.map((ingredient, index) => {
    const k = `answers[${index}]`;
    return (<Field key={k} name={k} type="text" component={renderAnswer} label={`Answer #${index + 1}`} onClick={() => fields.remove(index)} />);
  })}
</div>);

Answers.propTypes = { ...fieldArrayPropTypes };

Answers.contextTypes = { classnames: func.isRequired };

export default Answers;
