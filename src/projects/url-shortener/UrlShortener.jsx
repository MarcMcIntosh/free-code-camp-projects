import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { received, rejected, request } from './actions';
import classnames from './styles';

const mapStateToProps = ({ urlShortener: { result, error, fetching } }) => ({ result, error, fetching });

const mapDispatchToProps = dispatch => ({
  onRequest: payload => dispatch(request(payload)),
  onReceived: payload => dispatch(received(payload)),
  onRejected: payload => dispatch(rejected(payload)),
});

class UrlShortener extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  handleSubmit(values) {
    this.props.onRequest(values);
  }
  render() {
    return (<div />);
  }
}

UrlShortener.propTypes = {
  onRequest: func.isRequired,
  // onReceived: func.isRequired,
  // onRejected: func.isRequired
};

UrlShortener.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(UrlShortener);
