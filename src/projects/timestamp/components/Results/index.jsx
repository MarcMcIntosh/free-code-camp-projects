import React from 'react';
import { func, object } from 'prop-types';
import Item from './Item';

const hasProp = (obj, str) => Object.prototype.hasOwnProperty.call(obj, str) && obj[str] !== null;

const Results = ({ results }, { classnames }) => (<ul className={classnames('list')}>
  {hasProp(results, 'unix') && (<Item title="Unix timestamp" text={results.unix} />)}
  {hasProp(results, 'natural') && (<Item title="Locale Date String" text={results.natural} />)}
</ul>);

Results.propTypes = { results: object.isRequired };
Results.contextTypes = { classnames: func.isRequired };

export default Results;
