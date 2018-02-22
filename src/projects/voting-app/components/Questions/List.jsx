import React from 'react';
import { array, func, string, shape } from 'prop-types';
import ListItem from './ListItem';

/* use with the results from questions/created_at  */

const QuestionsList = ({
  questions,
}, {
  classnames,
  links: { poll, create },
}) => (<ul className={classnames('list')}>
  <ListItem text="test" secondary={new Date().toJSON()} href={create} />
  {questions.map(({ id, value, key }) => (<ListItem key={id} text={value} secondary={key} href={poll + '/' + id} question={value} />))}
</ul>);

QuestionsList.propTypes = {
  questions: array.isRequired,
};

QuestionsList.contextTypes = {
  classnames: func.isRequired,
  links: shape({ poll: string.isRequired }).isRequired,
};

export default QuestionsList;
