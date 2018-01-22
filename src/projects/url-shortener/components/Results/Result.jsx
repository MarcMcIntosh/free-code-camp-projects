import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';

class Result extends PureComponent {
  constructor(props) {
    super(props);
    this.createRef = this.createRef.bind(this);
    this.copy = this.copy.bind(this);
  }
  createRef(elem) { this.elem = elem; }
  copy() {
    this.elem.select();
    document.execCommand('copy');
  }
  render() {
    const { result } = this.props;
    const { classnames } = this.context;
    return (<li className={classnames('list__item')}>
      <a className={classnames('list__icon')} tabIndex="0" role="button" title="copy to clipboard" onClick={this.copy}>content_copy</a>
      <a href={result} ref={this.createRef}>{result}</a>
    </li>);
  }
}

Result.propTypes = { result: string.isRequired };
Result.contextTypes = { classnames: func.isRequired };

export default Result;
