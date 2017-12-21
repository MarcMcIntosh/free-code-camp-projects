import React from 'react';
import { string, oneOfType, number } from 'prop-types';

const Result = ({ pageid, title, extract }, { classnames }) => (<div className={classnames('wikipedia-viewer__result')}>
  <span className={classnames('wikipedia-viewer__result__title')}>
    <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank" rel="noopener noreferrer" tabIndex="0">{title}</a>
    <p className="wikipedia-viewer__result__extract">{extract}</p>
  </span>
</div>);

Result.propTypes = {
  title: string.isRequired,
  pageid: oneOfType([string, number]).isRequired,
  extract: string.isRequired,
};

export default Result;
