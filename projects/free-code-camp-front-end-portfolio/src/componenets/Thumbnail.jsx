import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
/* Check out MDC card demo */
const Thumbnail = ({
  children,
  ...props
}) => (<img role="presentation" {...props}>{
    ReactDOM.renderToStaticMarkup(children)
}</img>);

Thumbnail.propTypes = { children: PropTypes.node };

export default Thumbnail;
