import React, { PureComponent } from 'react';
import { func, bool, array, string } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { request, received, rejected } from './actions';

const mapStateToProps = ({ imageSearch: { error, results, fetching } }) => ({ error, results, fetching });

const mapDispatchToProps = dispatch => ({
  onRequest: payload => dispatch(request(payload)),
  onReceived: payload => dispatch(received(payload)),
  onRejected: payload => dispatch(rejected(payload)),
});

class ImageSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  render() {
    return (<div />);
  }
}

ImageSearch.propTypes = {
  onRequest: func.isRequired,
  onReceived: func.isRequired,
  onRejected: func.isRequired,
  error: string.isRequired,
  fetching: bool.isRequired,
  results: array.isRequired,
};

ImageSearch.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch);
