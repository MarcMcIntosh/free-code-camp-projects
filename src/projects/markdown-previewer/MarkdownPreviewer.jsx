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
    this.state = {
      rows: this.props.value.split(/\n/).length + 1,
      focused: false,
    };
    this._resize = this._resize.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  componentDidMount() { this._resize(); }
  componentDidUpdate() { this._resize(); }
  _resize() {
    console.log(this.textarea);
  }
  _onFocus() { this.setState({ focused: true }); }
  _onBlur() { this.setState({ focused: false }); }
  render() {
    const { props: { onChange, value }, context: { classnames } } = this;
    return (<div className={classnames('markdown-previewer')}>
      <div className={classnames('markdown-previewer__textfield', this.state.focused && 'markdown-previewer__textfield--focused')}>
        <textarea
          ref={(c) => { this.textarea = c; }}
          name="markdown-input"
          rows={this.state.rows}
          className={classnames('markdown-previewer__input')}
          value={value}
          onChange={onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        />
        <label htmlFor="markdown-input" className={classnames('markdown-previewer__label')}>Markdown</label>
      </div>

      <MarkdownBox markdown={value} />
    </div>);
  }
}

MarkdownPreviewer.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

MarkdownPreviewer.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
