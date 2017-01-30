import React, { PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';

const Thumbnail = ({
  children,
  ...props
}) => {
  const thumb = ReactDOMServer.renderToStaticMarkup(children);
  return (<iframe {...props} sandbox="allow-same-origin" {...props} srcDoc={thumb} />);
};


Thumbnail.propTypes = { children: PropTypes.node };

export default Thumbnail;
