import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, bool, string, array } from 'prop-types';

import { fetchData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import scatterplot from './scatterplot';

const mapStateToProps = ({ scatterPlotGraph: { data, error, fetching } }) => ({ data, error, fetching });

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});

class ScatterPlotGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.scatterplot = scatterplot;
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.onFetchData();
    }
  }
  componentDidUpdate() {
    if (this.props.data.length > 0) {
      this.scatterplot(this.root, this.props.data, this.context.classnames);
    }
  }
  handleClick() { this.props.onFetchData(); }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('scatterplot')}>
      <header className={classnames('scatterplot__header')}>
        <h1 className={classnames('scatterplot__title')}>
          Doping in Professional Bicycle Racing
        </h1>
        <h2 className={classnames('scatterplot__subtitle')}>
          35 Fastest times up Alpe d&apos;Huez, Normalized to 13.8km distance.
        </h2>
        {(this.props.fetching) ? (<Loader />) : (<hr />)}
      </header>

      {this.props.error && (<ErrorMessage onClick={this.props.onFetchData}>{this.props.error}</ErrorMessage>)}

      <div className={classnames('scatterplot__container')} ref={(c) => { this.root = c; }} />
    </div>);
  }
}

ScatterPlotGraph.propTypes = {
  onFetchData: func.isRequired,
  error: string.isRequired,
  fetching: bool.isRequired,
  data: array.isRequired,
};

ScatterPlotGraph.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(ScatterPlotGraph);
