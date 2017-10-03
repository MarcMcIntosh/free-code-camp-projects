import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  bool,
  oneOfType,
  object,
} from 'prop-types';

import { fetchData } from './actions';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import heatMap from './heat-map';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});

class HeatMap extends PureComponent {
  componentDidMount() {
    if (!this.props.data) { this.props.onFetchData(); }
  }
  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.data).length === 0 && Object.keys(this.props.data) > 0) {
      heatMap(this.container, this.props.data);
    }
  }
  render() {
    const hasData = Object.keys(this.props.data) > 0;
    const Err = (!hasData && this.props.error);

    return (<div className="heat-map">
      <ErrorMessage err={Err} onClick={this.props.onFetchData} />
      <Loader loading={!hasData && this.props.fetching} />
      <div className="heat-map__container" ref={(c) => { this.container = c; }} />
    </div>);
  }
}

HeatMap.propTypes = {
  onFetchData: func.isRequired,
  error: oneOfType([
    bool,
    instanceOf(Error),
  ]).isRequired,
  fetching: bool.isRequired,
  data: object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeatMap);
