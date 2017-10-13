import React from 'react';
import { string, oneOfType, number } from 'prop-types';

const ListItem = ({ pageid, title, extract, ...props }) => (<div className="mdc-card" {...props}>

  <section className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">
      <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank" rel="noopener noreferrer" tabIndex="0">{title}</a>
    </h1>
  </section>

  <section className="mdc-card__supporting-text">
    {extract}
  </section>

</div>);

ListItem.propTypes = {
  title: string.isRequired,
  pageid: oneOfType([string, number]).isRequired,
  extract: string.isRequired,
};

export default ListItem;
