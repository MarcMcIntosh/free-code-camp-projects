import React from 'react';
import { func, array } from 'prop-types';
import Result from './Result';

const Results = ({ results }, { classnames }) => {
  // const re = /[^/]+$/;
  const re = /^(.*\/)/;
  return (<ul className={classnames('list')}>
    {results.map((result, i) => {
      const k = result.replace(re, `${i}.`);
      return (<Result key={k} result={result} />);
    })}
  </ul>);
};

Results.propTypes = { results: array.isRequired };

Results.contextTypes = { classnames: func.isRequired };

export default Results;
