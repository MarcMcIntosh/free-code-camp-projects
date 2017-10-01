import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  bool,
  oneOfType,
  shape,
  array,
  arrayOf,
} from 'prop-types';

import { fetchData } from './actions';
import HeatMap from './components/HeatMap';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});

class GraphContainer extends Component {
  componentDidMount() {
    if (!this.props.data) { this.props.onFetchData(); }
  }
  render() {
    const hasData = this.props.data && this.props.data.length > 0;

    const Err = (!hasData && this.props.error);

    return (<div className="heat-map">
      <ErrorMessage err={Err} onClick={this.props.onFetchData} />
      <Loader loading={this.props.fetching} />
      {(this.props.data) ? (<HeatMap data={this.props.data} />) : false}
    </div>);
  }
}

GraphContainer.propTypes = {
  onFetchData: func.isRequired,
  error: oneOfType([
    bool,
    instanceOf(Error),
  ]).isRequired,
  fetching: bool.isRequired,
  data: oneOfType([
    bool,
    shape({
      data: arrayOf(array),
    }),
  ]).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
