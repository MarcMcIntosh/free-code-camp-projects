import React, { PropTypes } from 'react';
import { IMAGE } from '../constants';

const Image = ({
  config,
  ...props
}) => (
  <img role="presentation" {...config} {...props} />
);

Image.propTypes = {
  config: PropTypes.shape({
    className: PropTypes.string,
    src: PropTypes.string,
  }),
};

Image.defaultProps = { config: IMAGE };

export default Image;
