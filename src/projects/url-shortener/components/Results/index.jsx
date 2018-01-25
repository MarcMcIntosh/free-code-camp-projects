import React from 'react';
import { func, array } from 'prop-types';
import Result from './Result';

const Results = ({ results }, { classnames }) => (<ul className={classnames('list')}>
  {results.map(result => (<Result result={result} />))}
</ul>);

Results.propTypes = { results: array.isRequired };

Results.contextTypes = { classnames: func.isRequired };

export default Results;
