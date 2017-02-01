import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import Thumbnail from './Thumbnail';

const Item = ({
  title,
  subTitle,
  children,
  ...props
}) => (<div className="mdc-card" {...props}>
  <div className="mdc-card__horizontal-block">
    <section className="mdc-card__primary">
      <h1 className="mdc-card__title mdc-card__title--large">{title || 'Title here'}</h1>
      <h2 className="mdc-card__subtitle">{subTitle || 'Subtitle here'}</h2>
    </section>

    <section className="mdc-card__media-item mdc-card__media-item--2x">
      <Thumbnail className="thumbnail">{children}</Thumbnail>
    </section>
  </div>

  <section className="mdc-card__actions">
    <Button className="mdc-button mdc-button--compact mdc-card__action">
      <Link to="tribute">View</Link>
    </Button>
    <Button className="mdc-button mdc-button--compact mdc-card__action">Info</Button>
  </section>
</div>);

const { string, node } = PropTypes;
Item.propTypes = {
  title: string,
  subTitle: string,
  children: node,
};

export default Item;
