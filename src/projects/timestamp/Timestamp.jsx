import React, { PureComponent } from 'react';
import { func, string, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { fetchDate, reset } from './actions';
import DateForm from './components/Form';
import Results from './components/Results';

const mapStateToProps = ({ timestamp: { error, message, data, fetching } }) => ({ error, data, fetching, message });

const mapDispatchToProps = dispatch => ({
  onFetchDate: payload => dispatch(fetchDate(payload)),
  onClear: () => dispatch(reset()),
});

class Timestamp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.has = (obj, str) => Object.prototype.hasOwnProperty.call(obj, str);
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
    const hasResults = this.has(this.props, 'message') && this.has(this.props.data, 'unix') && this.has(this.props.data, 'natural');
    return (<div className={this.classnames('timestamp')}>
      {hasResults ? (<Results error={this.props.error} message={this.props.message} unix={this.props.data.unix} natural={this.props.data.natural} onClick={this.props.onClear} />) : (<DateForm onSubmit={this.handleSubmit} />)}
    </div>);
  }
}

Timestamp.propTypes = {
  apiUrl: string.isRequired,
  onFetchDate: func.isRequired,
  message: string.isRequired,
  data: object.isRequired,
  onClear: func.isRequired,
  error: bool.isRequired,
};

Timestamp.defaultProps = { apiUrl: '/api/timestamp' };

Timestamp.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Timestamp);
