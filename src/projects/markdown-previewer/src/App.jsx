import React from 'react';
import { connect } from 'react-redux';
import { string, oneOfType, func, number } from 'prop-types';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';
import { onInput } from './actions';

const mapStateToProps = state => ({
  value: state.input,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onInput(event.target.value)),
});

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

const MarkdownPreviewer = ({
  onChange,
  value,
  rows,
  ...props
}) => (<div className="markdown-previewer" {...props}>
  <textarea className="markdown-previewer__input" value={value} rows={parseInt(rows, 10)} />
  <iframe className="markdown-previewer__output" title="Preview" srcDoc={md.render(value)} />
</div>);

MarkdownPreviewer.propTypes = {
  value: string.isRequired,
  rows: oneOfType([string, number]),
  onChange: func.isRequired,
};

MarkdownPreviewer.defaultProps = { rows: 10 };

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
