import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
  string,
  instanceOf,
  bool,
  oneOfType,
  array,
} from 'prop-types';
import { fetchData } from '../actions';
import { DATA_SOURCE } from '../constants';
import Graph from './Graph';
import Heading from './Heading';

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
    return (<div className="scatterplot">
      <Heading />
      {(this.props.error) ? 'There Has Been an Error' : this.props.error}
      {(this.props.fetching) ? 'Loading' : this.props.fetching}
      {(this.props.data) ? (<Graph data={this.props.data} />) : false}
    </div>);
  }
}

GraphContainer.propTypes = {
  onFetchData: func.isRequired,
  url: string,
  error: oneOfType([
    bool,
    instanceOf(Error),
  ]).isRequired,
  fetching: bool.isRequired,
  data: oneOfType([
    bool,
    array,
  ]).isRequired,
};

GraphContainer.defaultProps = {
  url: DATA_SOURCE,
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
