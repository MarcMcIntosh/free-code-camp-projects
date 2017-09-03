import React from 'react';
import { string } from 'prop-types';
import cx from './cx';

const Media = ({
  title,
  src,
  ...props
}) => (<img alt={title} src={src} className={cx('media')} {...props} />);

Media.propTypes = {
  title: string.isRequired,
  src: string.isRequired,
};

export default Media;
