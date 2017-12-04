import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, instanceOf, bool, oneOfType, array } from 'prop-types';

import { fetchData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import draw from './scatterplot';

const mapStateToProps = ({ scatterPlotGraph: { data, error, fetching } }) => ({ data, error, fetching });

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});

class GraphContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.onFetchData();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.length === 0 && this.props.data.length > 0) { draw(this.root, this.props.data); }
  }
  handleClick() { this.props.onFetchData(); }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('scatterplot')}>
      <header>
        <h1 className={classnames('scatterplot__title')}>
          Doping in Professional Bicycle Racing
        </h1>
        <h2 className={classnames('scatterplot__subtitle')}>
          35 Fastest times up Alpe d&apos;Huez, Normalized to 13.8km distance.
        </h2>
        {(this.props.fetching) ? (<Loader />) : (<hr />)}
      </header>

      <ErrorMessage onClick={this.props.onFetchData}>{this.props.error}</ErrorMessage>

      <div className={classnames('scatterplot__container')} ref={(c) => { this.root = c; }} />

      <footer className={classnames('scatterplot__supporting-text')}>
        data from: https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json
      </footer>
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
  data: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
