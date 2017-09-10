import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  string,
  instanceOf,
  bool,
  oneOfType,
  shape,
  array,
  arrayOf,
} from 'prop-types';
import { fetchData } from '../actions';
import { DATA_SOURCE } from '../constants';
import HeatMap from './HeatMap';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  onFetchData: address => dispatch(fetchData(address)),
});

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (!this.props.data) {
      this.props.onFetchData(this.props.url);
    }
  }
  handleClick() {
    this.props.onFetchData(this.props.url);
  }
  render() {
    return (<div className="heat-map">
      {(this.props.error) ? 'There Has Been an Error' : this.props.error}
      {(this.props.fetching) ? 'Loading' : this.props.fetching}
      {(this.props.data) ? (<HeatMap data={this.props.data} />) : false}
    </div>);
  }
}

GraphContainer.propTypes = {
  onFetchData: func.isRequired,
  url: string.isRequired,
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

GraphContainer.defaultProps = {
  url: DATA_SOURCE,
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
