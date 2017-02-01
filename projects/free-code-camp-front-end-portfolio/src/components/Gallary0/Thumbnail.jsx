import React, { PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import ToSVG from './ToSVG';
const Thumbnail = ({
  children,
  ...props
}) => {
  const thumb = ReactDOMServer.renderToStaticMarkup(children);
  // Iframe option
  return (<div {...props}>
    <iframe
      sandbox="allow-same-origin"
      srcDoc={thumb}
      scrolling="no"
      seamless="seamless"
    />
  </div>);
  // SVG option
  // var DOMURL = window.URL || window.webkitURL || window;
  // return (<div {...props}>
  //  <div dangerouslySetInnerHTML={{ __html: thumb }} />
  // </div>);
};


Thumbnail.propTypes = { children: PropTypes.node };

export default Thumbnail;
