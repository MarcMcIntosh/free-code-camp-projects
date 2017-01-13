import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { keyPress } from '../actions';

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentWillMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }
  handleKeyPress(event) {
    console.log(event);
    return this.props.onKey(event);
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
  ]),
  onKey: PropTypes.func,
};

const mapStateToProps = state => ({
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  onKey: event => dispatch(keyPress(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
