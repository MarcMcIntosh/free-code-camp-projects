import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, string, object, func } from 'prop-types';
import drawGraph from './data-globe';
import { fetchMtrData, fetchGeoData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

const mapStateToProps = ({ dataGlobe: { topology, meteorites, error_topology, error_meteorites, fetching_topology, fetching_meteorites } }) => ({ topology, meteorites, error_topology, error_meteorites, fetching_topology, fetching_meteorites });

const mapDispatchToProps = dispatch => ({
  fetchMeteorites: () => dispatch(fetchMtrData()),
  fetchTopology: () => dispatch(fetchGeoData()),
});

class GraphContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = drawGraph;
    this.hasTopology = this.hasTopology.bind(this);
    this.hasMeteroites = this.hasMeteroites.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    if (this.hasTopology() && this.hasMeteroites()) {
      this.draw(this.root, this.props.topology, this.props.meteorites, this.context.classnames);
    }
  }
  hasTopology() {
    const bbox = Object.prototype.hasOwnProperty.call(this.props.topology, 'bbox');
    const obj = Object.prototype.hasOwnProperty.call(this.props.topology, 'objects');
    return (bbox && obj);
    // return Object.keys(this.props.topology).length && true;
  }
  hasMeteroites() {
    return Object.hasOwnProperty.call(this.props.meteorites, 'features');
    // return Object.keys(this.props.meteorites).length && true;
  }
  fetchData() {
    if (!this.props.fetching_meteorites && !this.hasMeteroites()) { this.props.fetchMeteorites(); }
    if (!this.props.fetching_topology && !this.hasTopology()) { this.props.fetchTopology(); }
  }
  render() {
    const { classnames } = this.context;
    const error = (this.props.error_meteorites || this.props.error_topology);
    const isLoading = (!error || this.props.fetching_topology || this.props.fetching_meteorites);
    return (<div className={classnames('data-globe')}>

      {isLoading && <Loader />}

      {error && <ErrorMessage onClick={this.fetchData}>{this.props.error_topology || this.props.error_meteorites}</ErrorMessage>}
      
      <section className={classnames('data-globe__header')}>
        <h1 className={classnames('data-globe__title')}>Some title</h1>
        <h2 className={classnames('data-globe__subtitle')}>and description</h2>
      </section>
      <div className="data-globe__container" ref={(c) => { this.root = c; }} />
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

GraphContainer.contextTypes = { classnames: func.isRequired };


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
