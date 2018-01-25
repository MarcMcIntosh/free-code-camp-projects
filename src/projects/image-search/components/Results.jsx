import React from 'react';
import { array, func } from 'prop-types';
import Item from './Item';

const filterFunc = d => Object.prototype.hasOwnProperty.call(d.pagemap, 'cse_image');

const Results = ({ items }, { classnames }) => (<div className={classnames('results')}>
  {items.filter(filterFunc).map(({ title, link, cacheId, pagemap: { cse_image: [{ src }] } }, i) => {
    const k = `${i}.${cacheId || link}`;
    return (<Item key={k} title={title} link={link} src={src} />);
  })}
</div>);

Results.propTypes = { items: array.isRequired };
Results.contextTypes = { classnames: func.isRequired };

export default Results;
