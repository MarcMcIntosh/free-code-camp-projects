import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { handleUserInput } from '../actions';


class Display extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (!isNaN(event.key) || /[0-9+-/.*%]/.test(event.key)) {
      // return these values early
      return this.props.onKey(event.key);
      // augment the follwoing keyCodes
    } else if (+event.keyCode === 13) {
      return this.props.onKey('=');
    } else if (+event.keyCode === 8) {
      return this.props.onKey('del');
    } else if (+event.keyCode === 46) {
      return this.props.onKey('clear');
    } else if (+event.keyCode === 32) {
      // space bar
      return this.props.onKey('ans');
    }
    return undefined;
  }
  render() {
    const { display, ...rest } = this.props;
    delete rest.onKey;
    return (<div {...rest}>
      <input type="text" readOnly="true" value={display} />
    </div>);
  }
}

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onKey: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  onKey: str => dispatch(handleUserInput(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
