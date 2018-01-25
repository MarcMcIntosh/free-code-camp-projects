import React, { PureComponent } from 'react';
import { func, string, object } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { fetchDate } from './actions';
import DateForm from './components/Form';
import Results from './components/Results';
import Message from './components/Message';

const mapStateToProps = ({ timestamp: { error, message, data, fetching } }) => ({ error, data, fetching, message });

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
  handleSubmit(values) {
    const { unix, natural } = values;
    const time = natural || unix;
    const param = '/' + encodeURIComponent(time);
    const addr = this.props.apiUrl.replace(/\/?$/, param);
    this.props.onFetchDate(addr);
  }
  render() {
    return (<div className={this.classnames('timestamp')}>
      <DateForm onSubmit={this.handleSubmit} />
      <Message text={this.props.message} />
      <Results results={this.props.data} />
    </div>);
  }
}

Timestamp.propTypes = {
  apiUrl: string.isRequired,
  onFetchDate: func.isRequired,
  message: string.isRequired,
  // error: bool.isRequired,
  // fetching: bool.isRequired,
  data: object.isRequired,
};

Timestamp.defaultProps = { apiUrl: '/api/timestamp' };

Timestamp.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Timestamp);
