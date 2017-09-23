import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { clearError } from '../actions';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    return this.props.clear();
  }
  render() {
    const { message, ...rest } = this.props;
    delete rest.clear;
    return (!message) ? false : (<div {...rest}>
      {message}
      <button tabIndex="0" type="button" onClick={this.handleClick}>Ok</button>
    </div>);
  }
}

ErrorMessage.propTypes = { message: string.isRequired,
  clear: func.isRequired };

const mapStateToProps = state => ({ message: state.error });

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
