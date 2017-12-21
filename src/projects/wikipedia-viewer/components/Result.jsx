import React from 'react';
import { string, oneOfType, number, func } from 'prop-types';

const Result = ({ pageid, title, extract, ...props }, { classnames }) => {
  const addr = `https://en.wikipedia.org/?curid=${pageid}`;
  return (<li className={classnames('wikipedia-viewer__card')} {...props}>
    <section className={classnames('wikipedia-viewer__primary')}>
      <h1 className={classnames('wikipedia-viewer__title')}>{title}</h1>
      <h2 className={classnames('wikipedia-viewer__subtitle')}><a href={addr} target="_blank" rel="noopener noreferrer" tabIndex="0">{addr}</a></h2>
    </section>
    <section className={classnames('wikipedia-viewer__extract')}>{extract}</section>
  </li>);
};

Result.propTypes = {
  title: string.isRequired,
  pageid: oneOfType([string, number]).isRequired,
  extract: string.isRequired,
};

Result.contextTypes = { classnames: func.isRequired };

export default Result;
