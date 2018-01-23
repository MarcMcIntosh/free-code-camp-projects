import React, { PureComponent } from 'react';
import { func, string, object, bool } from 'prop-types';
import { connect } from 'react-redux';

import { getHeaders } from './actions';
import classnames from './styles';
import Loader from './components/Loader';
import List from './components/List';
import ErrorAction from './components/ErrorAction';

const mapStateToProps = ({ headerParser: { error, results, fetching } }) => ({ error, results, fetching });

const mapDispatchToProps = dispatch => ({
  onGetHeaders: payload => dispatch(getHeaders(payload)),
});

class HeaderParser extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.onGetHeaders = () => this.props.onGetHeaders(this.props.apiUrl);
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.onGetHeaders(); }
  render() {
    return (<div className={this.classnames('card')}>
      <section className={this.classnames('card__primary')}>
        <h1 className={this.classnames('card__title')}>Request Headers</h1>
        {this.props.fetching ? (<Loader />) : (<hr />)}
      </section>
      <List results={this.props.results} />
      {this.props.error && (<ErrorAction message={this.props.error} />)}
    </div>);
  }
}

HeaderParser.propTypes = {
  apiUrl: string.isRequired,
  onGetHeaders: func.isRequired,
  results: object.isRequired,
  fetching: bool.isRequired,
  error: string.isRequired,
};

HeaderParser.defaultProps = { apiUrl: '/api/header-parser' };

HeaderParser.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderParser);
