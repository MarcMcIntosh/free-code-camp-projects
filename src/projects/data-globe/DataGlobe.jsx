import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, string, object, func } from 'prop-types';
import drawGraph from './data-globe';
import { fetchMtrData, fetchGeoData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

const mapStateToProps = ({
  dataGlobe: {
    topology,
    meteorites,
    error_topology,
    error_meteorites,
    fetching_topology,
    fetching_meteorites,
  },
}) => ({
  topology,
  meteorites,
  error_topology,
  error_meteorites,
  fetching_topology,
  fetching_meteorites,
  has_topology: Object.keys(topology).length > 0,
  has_meteroites: Object.keys(meteorites).length > 0,
});

const mapDispatchToProps = dispatch => ({
  fetchMeteorites: () => dispatch(fetchMtrData()),
  fetchTopology: () => dispatch(fetchGeoData()),
});

class GraphContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = drawGraph;
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    if (!this.props.has_meteroites || !this.props.has_topology) {
      this.fetchData();
    } else {
      this.draw(this.root, this.props.topology, this.props.meteorites, this.context.classnames);
    }
  }
  componentDidUpdate() {
    if (this.props.has_topology && this.props.has_meteroites) {
      this.draw(this.root, this.props.topology, this.props.meteorites, this.context.classnames);
    }
  }
  fetchData() {
    if (!this.props.fetching_meteorites && !this.props.has_meteroites) { this.props.fetchMeteorites(); }

    if (!this.props.fetching_topology && !this.props.has_topology) { this.props.fetchTopology(); }
  }
  render() {
    const { classnames } = this.context;
    const error = (this.props.error_meteorites || this.props.error_topology);
    const isLoading = (!this.props.has_topology || !this.props.has_meteroites || this.props.fetching_topology || this.props.fetching_meteorites);
    return (<div className={classnames('data-globe')}>
      <section className={classnames('data-globe__header')}>
        <h1 className={classnames('data-globe__title')}>Recorded meteroite landing zones</h1>
        <h2 className={classnames('data-globe__subtitle')}>Left click to zoom in and hold shift and click to zoom out</h2>
      </section>
      <div className="data-globe__container" ref={(c) => { this.root = c; }} />

      <section className={classnames('data-globe__footer')}>
        {isLoading && <Loader />}
        {error && <ErrorMessage onClick={this.fetchData}>{this.props.error_topology || this.props.error_meteorites}</ErrorMessage>}
      </section>
    </div>);
  }
}

GraphContainer.propTypes = {
  fetching_topology: bool.isRequired,
  fetching_meteorites: bool.isRequired,
  has_meteroites: bool.isRequired,
  has_topology: bool.isRequired,
  error_topology: string.isRequired,
  error_meteorites: string.isRequired,
  topology: object.isRequired,
  meteorites: object.isRequired,
  fetchMeteorites: func.isRequired,
  fetchTopology: func.isRequired,
};

GraphContainer.contextTypes = { classnames: func.isRequired };


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
