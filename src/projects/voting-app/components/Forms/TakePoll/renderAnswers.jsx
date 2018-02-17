import React from 'react';
import { Field } from 'redux-form'
import CheckBox from './CheckBox';

const renderAnswers = ({ fields, error }) => (<ul>
  {fields.map((answer) => (<li key={answer_id}>
    <Field component={CheckBox} name="answer" label={answer.value} type="checkbox" />
  </li>))}
</ul>);
