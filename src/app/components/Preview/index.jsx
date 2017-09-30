import React from 'react';
import { string } from 'prop-types';

const Preview = ({
  title,
  challenge,
  url,
  media,
}) => (<div className="mdc-card preview">
  <div className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">{title}</h1>
  </div>

  <img alt={`${title}: preview`} role="presentation" className="mdc-card__media-item mdc-card__media-item--3x" src={media} />

  <div className="mdc-card__actions">
    <a className="mdc-button mdc-card__action" href={url}>View</a>
    <a className="mdc-button mdc-card__action" href={challenge}>About</a>
  </div>
</div>);


Preview.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  challenge: string.isRequired,
  media: string.isRequired,
};

export default Preview;
