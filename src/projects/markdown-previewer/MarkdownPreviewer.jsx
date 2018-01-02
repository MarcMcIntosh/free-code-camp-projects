import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import classnames from './styles';
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
    this.classnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  _onFocus() { this.setState({ focused: true }); }
  _onBlur() { this.setState({ focused: false }); }
  render() {
    const { onChange, value } = this.props;
    return (<div className={this.classnames('markdown-previewer')}>
      <div className={this.classnames('markdown-previewer__container')}>

        <div className={this.classnames('markdown-previewer__cell')}>
          <div className={this.classnames('markdown-previewer__textfield', this.state.focused && 'markdown-previewer__textfield--focused')}>
            <textarea
              name="MarkDown"
              className={this.classnames('markdown-previewer__input')}
              value={value}
              rows="10"
              onChange={onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              wrap="on"
            />
            <label htmlFor="MarkDown" className={this.classnames('markdown-previewer__label')}>MarkDown</label>
          </div>
        </div>

        <div className={this.classnames('markdown-previewer__cell')}>
          <MarkdownBox
            name="markdown-output"
            markdown={value}
            className={this.classnames('markdown-previewer__output')}
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

MarkdownPreviewer.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
