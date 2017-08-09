import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = () => ({});

const md = new Remarkable('full', {
  // html: true,
  // linkify: true,
  // typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return hljs.highlightAuto(str).value || '';
  },
});

const genLink = (sheets) => {
  const arr = Array.isArray(sheets) ? sheets : sheets.split(' ');
  return arr.map(d => `<link rel="stylesheet" type="text/css" href="${d}" />`);
};

const Output = ({ input, stylesheets, ...props }) => {
  const src = `${genLink(stylesheets)} ${md.render(input)}`;
  return (<iframe {...props} sandbox="" srcDoc={src} />);
};

const { string, array, oneOfType } = PropTypes;
Output.propTypes = {
  input: string,
  stylesheets: oneOfType([string, array]),
};
Output.defaultProps = {
  input: '',
  stylesheets: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/agate.min.css',
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
