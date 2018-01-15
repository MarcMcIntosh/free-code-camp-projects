import React from 'react';
import { func, array } from 'prop-types';
import ListItem from './ListItem';

const Results = ({ results }, { classnames }) => (<ul className={classnames('list')}>
  {results.map((d, i) => {
    const k = `${i}.${d.name}`;
    return (<ListItem name={d.name} size={d.size} key={k} />);
  })}
</ul>);

Results.propTypes = { results: array.isRequired };
Results.contextTypes = { classnames: func.isRequired };

export default Results;
