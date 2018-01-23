import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { fetchDate } from './actions';

const mapStateToProps = ({ timestamp: { error, data, fetching } }) => ({ error, data, fetching });

const mapDispatchToProps = dispatch => ({
  onFetchDate: payload => dispatch(fetchDate(payload)),
});

class Timestamp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  handleSubmit(value) {
    const time = '/' + value.time;
    const addr = this.props.apiUrl.replace(/\/?$/, time);
    this.props.onFetchDate(addr);
  }
  render() {
    return (<div />);
  }
}

Timestamp.propTypes = {
  apiUrl: string.isRequired,
  onFetchDate: func.isRequired,
};

Timestamp.defaultProps = { apiUrl: '/api/timestamp' };

Timestamp.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Timestamp);
