import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { onInput } from './actions';
import MarkdownBox from './components/MarkdownBox';

const mapStateToProps = ({ markdownPreviewer: { value } }) => ({ value });

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onInput(event.target.value)),
});

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  _onFocus() { this.setState({ focused: true }); }
  _onBlur() { this.setState({ focused: false }); }
  render() {
    const { props: { onChange, value }, context: { classnames } } = this;
    return (<div className={classnames('markdown-previewer')}>
      <div className={classnames('markdown-previewer__container')}>

        <div className={classnames('markdown-previewer__cell')}>
          <div className={classnames('markdown-previewer__textfield', this.state.focused && 'markdown-previewer__textfield--focused')}>
            <textarea
              name="MarkDown"
              className={classnames('markdown-previewer__input')}
              value={value}
              rows="10"
              onChange={onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              wrap="on"
            />
            <label htmlFor="MarkDown" className={classnames('markdown-previewer__label')}>MarkDown</label>
          </div>
        </div>

        <div className={classnames('markdown-previewer__cell')}>
          <MarkdownBox
            name="markdown-output"
            markdown={value}
            className={classnames('markdown-previewer__output')}
          />
        </div>
      </div>
    </div>);
  }
}

MarkdownPreviewer.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

MarkdownPreviewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
