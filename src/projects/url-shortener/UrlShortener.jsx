import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
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
    const addr = this.props.submitUrl.replace(/\/?$/, `/${values.url}`);
    this.props.onRequest(addr);
  }
  render() {
    return (<div />);
  }
}

UrlShortener.propTypes = {
  onRequest: func.isRequired,
  submitUrl: string.isRequired,
  // onReceived: func.isRequired,
  // onRejected: func.isRequired
};

UrlShortener.defaultProps = {
  submitUrl: '/api/url-shortener',
};

UrlShortener.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(UrlShortener);
