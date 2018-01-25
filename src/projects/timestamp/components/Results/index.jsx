import React from 'react';
import { func, string, number, bool } from 'prop-types';
import Item from './Item';

const Results = ({ error, message, unix, natural, onClick }, { classnames }) => (<div className={classnames('card')}>
  <header className={classnames('card__primary')}>
    <h1 className={classnames('card__title')}>{error ? 'Error' : 'Success'}</h1>
    <h2 className={classnames('card__subtitle')}>{message}</h2>
  </header>
  <ul className={classnames('list')}>
    <Item title="Unix timestamp" text={unix} />
    <Item title="Locale Date String" text={natural} />
  </ul>
  <section className={classnames('card__actions')}>
    <button onClick={onClick} title="Clear" className={classnames('card__action')}>Clear</button>
  </section>
</div>);

Results.propTypes = {
  unix: number.isRequired,
  natural: string.isRequired,
  message: string.isRequired,
  onClick: func.isRequired,
  error: bool.isRequired,
};
Results.contextTypes = { classnames: func.isRequired };

export default Results;
