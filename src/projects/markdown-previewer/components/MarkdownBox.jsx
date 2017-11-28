import React, { PureComponent } from 'react';
import { node, func } from 'prop-types';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const md = new Remarkable('full', {
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return hljs.highlightAuto(str).value || '';
  },
});

class MarkdownBox extends PureComponent {
  constructor(props) {
    super(props);
    this._highlight = this._highlight.bind(this);
    this.md = md;
  }
  componentDidMount() { this._highlight(); }
  componentDidUpdate() { this._highlight(); }
  _highlight() {
    const { classnames } = this.context;
    this.root.querySelectorAll('pre code').forEach(elem => Array.prototype.forEach.call(elem.children, child => child.setAttribute('class', classnames(child.className))));
  }
  render() {
    const { markdown, ...props } = this.props;
    return (<div
      {...props}
      ref={(root) => { this.root = root; }}
      dangerouslySetInnerHTML={{
        __html: this.md.render(markdown),
      }}
    />);
  }
}

MarkdownBox.propTypes = { markdown: node.isRequired };
MarkdownBox.contextTypes = { classnames: func.isRequired };

export default MarkdownBox;
