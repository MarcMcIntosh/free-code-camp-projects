import React from 'react';
import { Field } from 'redux-form'
import AnswerRadio from './AnswerRadio';

const renderAnswers = ({ fields, error }) => (<section>
  {fields.map((answer) => (<li key={answer_id}>
      <Field component={AnswerRadio} name="answer" label={answer.value} value={} type="checkbox" />
  </li>))}
</ul>);
