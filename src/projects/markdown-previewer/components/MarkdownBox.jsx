import React, { PureComponent } from 'react';
import { node, func } from 'prop-types';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const md = new Remarkable('full', {
  typographer: true,
  linkify: true,
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
    const { props: { markdown }, context: { classnames } } = this;
    return (<div className={classnames('markdown-previewer__textfield')}>
      <div
        name="MarkUp"
        className={classnames('markdown-previewer__output')}
        readOnly
        ref={(root) => { this.root = root; }}
        dangerouslySetInnerHTML={{
          __html: this.md.render(markdown),
        }}
      />
      <label htmlFor="MarkUp" className={classnames('markdown-previewer__label')}>html Mark-up</label>
    </div>);
  }
}

MarkdownBox.propTypes = { markdown: node.isRequired };
MarkdownBox.contextTypes = { classnames: func.isRequired };

export default MarkdownBox;
