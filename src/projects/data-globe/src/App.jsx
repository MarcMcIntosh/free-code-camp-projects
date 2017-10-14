import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, string, object, func } from 'prop-types';
import dataGlobe from './data-globe';
import { fetchMtrData, fetchGeoData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

const mapStateToProps = state => ({
  topology: state.topology,
  meteorites: state.meteorites,
  error_topology: state.error_topology,
  error_meteorites: state.error_meteorites,
  fetching_topology: state.fetching_topology,
  fetching_meteorites: state.fetching_meteorites,
});

const mapDispatchToProps = dispatch => ({
  fetchMeteorites: () => dispatch(fetchMtrData()),
  fetchTopology: () => dispatch(fetchGeoData()),
});

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.hasTopology = this.hasTopology.bind(this);
    this.hasMeteroites = this.hasMeteroites.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    if (this.hasTopology() && this.hasMeteroites()) {
      this.draw();
    }
  }
  hasTopology() {
    const bbox = Object.prototype.hasOwnProperty.call(this.props.topology, 'bbox');
    const obj = Object.prototype.hasOwnProperty.call(this.props.topology, 'objects');
    return (bbox && obj);
  }
  hasMeteroites() {
    return Object.hasOwnProperty.call(this.props.meteorites, 'features');
  }
  fetchData() {
    if (!this.props.fetching_meteorites && !this.hasMeteroites()) { this.props.fetchMeteorites(); }
    if (!this.props.fetching_topology && !this.hasTopology()) { this.props.fetchTopology(); }
  }
  draw() {
    dataGlobe(this.root, this.props.topology, this.props.meteorites);
  }
  render() {
    const error = (this.props.error_meteorites && this.props.error_topology) ? 'Failed to fetch data sets' : this.props.error_meteorites || this.props.error_topology;
    const isLoading = (!error || this.props.fetching_topology || this.props.fetching_meteorites);
    return (<div className="data-globe__container">
      <Loader className="data-globe__loading" loading={isLoading} />
      <ErrorMessage className="data-globe__error" onClick={this.fetchData} text={error} />
      <div className="data-globe__graph" ref={(c) => { this.root = c; }} />
    </div>);
  }
}

GraphContainer.propTypes = {
  fetching_topology: bool.isRequired,
  fetching_meteorites: bool.isRequired,
  error_topology: string.isRequired,
  error_meteorites: string.isRequired,
  topology: object.isRequired,
  meteorites: object.isRequired,
  fetchMeteorites: func.isRequired,
  fetchTopology: func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
