import React, { PureComponent } from 'react';
import { node, func } from 'prop-types';

class MarkdownBox extends PureComponent {
  constructor(props) {
    super(props);
    this._highlight = this._highlight.bind(this);
  }
  componentDidMount() { this._highlight(); }
  componentDidUpdate() { this._highlight(); }
  _highlight() {
    const arr = this.root.querySelectorAll('pre code');
    arr.forEach((elem) => {
      const cn = this.context.classnames(elem.className);
      elem.setAttribute('class', cn);
      Array.prototype.forEach.call(elem.children, (c) => {
        c.setAttribute('class', this.context.classnames(c.className));
      });
    });
  }
  render() {
    return (<div
      ref={(root) => { this.root = root; }}
      dangerouslySetInnerHTML={{ __html: this.props.markdown }}
    />);
  }
}

MarkdownBox.propTypes = { markdown: node.isRequired };
MarkdownBox.contextTypes = { classnames: func.isRequired };

export default MarkdownBox;
