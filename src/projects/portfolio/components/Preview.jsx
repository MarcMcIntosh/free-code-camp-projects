import React from 'react';
import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';

const Preview = ({ title, challenge, url, media }, { classnames }) => (<div className={classnames('preview')}>

  <div className={classnames('preview__block')}>
    <section className={classnames('preview__primary')}>
      <h1 className={classnames('preview__title')}>{title}</h1>
    </section>
    <img className={classnames('preview__media')} src={media} alt="" />
  </div>

  <div className={classnames('preview__actions')}>
    <Link className={classnames('preview__action')} to={url}>View</Link>
    <a className={classnames('preview__action')} href={challenge}>About</a>
  </div>
</div>);


Preview.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  challenge: string.isRequired,
  media: string.isRequired,
};

Preview.contextTypes = { classnames: func.isRequired };

export default Preview;
