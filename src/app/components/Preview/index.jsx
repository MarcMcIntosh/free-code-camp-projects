import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './preview.scss';

const Preview = ({
  title,
  challenge,
  url,
  media,
}) => (<div className="mdc-card__horizontal-block">
  <div className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">{title}</h1>
  </div>
  <img src={media} alt="" className="mdc-card__media-item mdc-card__media-item--3x" />
  <div className="mdc-card__actions">
    <Link className="mdc-button mdc-card__action" to={url}>View</Link>
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
