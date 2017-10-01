import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func, instanceOf, bool, oneOfType, array } from 'prop-types';
import { fetchData, fetchFlags } from '../actions';
import TheForce from './TheForce';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  fetching_data: state.fetching_data,
  fetching_flags: state.fetching_flags,
  flags: state.flags,
});

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
  onFetchFlags: () => dispatch(fetchFlags()),
});

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.getJson = this.getJson.bind(this);
  }
  componentDidMount() { this.getJson(); }
  getJson() {
    if (!this.props.fetching_flags && this.props.flags.length === 0) {
      this.props.onFetchFlags();
    }
    if (!this.props.fetching_data && !Object.hasOwnProperty.call(this.props.data, 'nodes')) {
      this.props.onFetchData();
    }
  }
  render() {
    const isLoading = this.props.fetching_data || this.props.fetching_flags;
    const hasData = Object.hasOwnProperty.call(this.props.data, 'nodes') && this.props.flags.length > 0;
    const Err = (this.props.error && !hasData);
    return (<div className="force">

      <ErrorMessage onClick={this.getJson} err={Err} />

      <Loader loading={!hasData && isLoading} />

      {(hasData && <TheForce data={this.props.data} flags={this.props.flags} />)}
    </div>);
  }
}

GraphContainer.propTypes = {
  onFetchData: func.isRequired,
  onFetchFlags: func.isRequired,
  error: oneOfType([bool, instanceOf(Error)]).isRequired,
  fetching_data: bool.isRequired,
  fetching_flags: bool.isRequired,
  data: object.isRequired,
  flags: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
