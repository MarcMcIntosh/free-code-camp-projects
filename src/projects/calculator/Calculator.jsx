import React, { Component } from 'react';
import { func, number, string, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import { handleUserInput } from './actions';
import Buttons from './components/CalculatorButtons';
import Display from './components/Display';

const mapStateToProps = state => ({
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  handleKeyPress: str => dispatch(handleUserInput(str)),
  handleClick: event => dispatch(handleUserInput(event.target.value)),
});

class Calculator extends Component {
  constructor(props) {
    super(props);
    this._onKeyPress = this._onKeyPress.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this._onKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyPress);
  }
  _onKeyPress(event) {
    if (!isNaN(event.key) || /[0-9+-/.*%]/.test(event.key)) {
      // return these values early
      return this.props.handleKeyPress(event.key);
      // augment the follwoing keyCodes
    } else if (+event.keyCode === 13) {
      return this.props.handleKeyPress('=');
    } else if (+event.keyCode === 8) {
      return this.props.handleKeyPress('del');
    } else if (+event.keyCode === 46) {
      return this.props.handleKeyPress('clear');
    } else if (+event.keyCode === 32) {
      // space bar
      return this.props.handleKeyPress('ans');
    }
    return void 0;
  }
  render() {
    return (<div className={this.context.classnames('calculator')}>
      <Display value={this.props.display} />
      <Buttons onClick={this.props.handleClick} />
    </div>);
  }
}

Calculator.propTypes = {
  display: oneOfType([string, number]).isRequired,
  handleKeyPress: func.isRequired,
  handleClick: func.isRequired,
};

Calculator.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
