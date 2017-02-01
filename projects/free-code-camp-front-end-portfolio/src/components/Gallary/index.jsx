import React, { PropTypes } from 'react';
import Item from './Item';
import './gallary.scss';

/* Rewrite Gallary to take an array like [
{ path: '',
  preview '',
  info: {
    title: PropTypes.string,
    challenge: PropTypes.string,
    objective: PropTypes.string,
    example: PropTypes.string,
    stories: PropTypes.arrayOf(PropTypes.string),
  }
},
} */

const Gallary = ({ apps, ...props }) => (<div {...props}>{
  apps.map((app, index) => (<Item key={index} {...app} />))
}</div>);

const { arrayOf, shape, string } = PropTypes;
Gallary.propTypes = {
  className: string,
  apps: arrayOf(shape({
    path: string,
    preview: string,
    info: shape({
      title: string,
      challenge: string,
      objective: string,
      example: string,
      stories: arrayOf(string),
    }),
  })),
};
Gallary.defaultProps = { className: 'gallary' };
export default Gallary;
