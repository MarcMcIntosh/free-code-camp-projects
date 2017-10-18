import React from 'react';
import { string } from 'prop-types';
import Button from 'material-ui/Button';
import './styles.scss';

const Preview = ({
  title,
  challenge,
  about,
  url,
  img,
}) => (<div className="gallery__card" style={img ? { backgroundImage: `url(${img})` } : {}} >
  <section className="gallery__header">
    <h1 className="gallery__title">{title}</h1>
    <h2 className="gallery__link"><a href={challenge} target="_blank" rel="noopener noreferrer">Spec Sheet</a></h2>
  </section>

  <section className="gallery__actions">
    <Button href={url}>View</Button>
    <Button href={about}>About</Button>
  </section>
</div>);


Preview.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  challenge: string.isRequired,
  about: string.isRequired,
  img: string.isRequired,
};

export default Preview;
