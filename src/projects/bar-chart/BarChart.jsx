import React, { PureComponent } from 'react';
import {
  func,
  array,
  node,
  bool,
} from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
// import Chart from './components/Chart';

import draw from './bar-chart';

const mapStateToProps = ({ barChart: { data, fetching, error } }) => ({ data, fetching, error });

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(fetchData()),
});

class BarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = draw;
  }
  componentDidMount() { this.props.getData(); }
  componentDidUpdate(prevProps) {
    if (this.props.data.length && this.props.data.length !== prevProps.data.length) {
      this.draw(this.chart, this.props.data, this.context.classnames);
    }
  }
  render() {
    const { classnames } = this.context;
    const { fetching, error, getData } = this.props;
    return (<div className={classnames('bar-chart')}>
      {error && <ErrorMessage onClick={getData}>{error}</ErrorMessage>}
      {fetching && <Loader /> }
      <header className={classnames('bar-chart__primary')}>
        <h1 className={classnames('bar-chart__title')}>
          US Gross Domestic Product
        </h1>
        <h2 className={classnames('bar-chart__subtitle')}>Seasonally adjusted annual rates <cite><a href="http://www.bea.gov/national/pdf/nipaguid.pdf">A Guide to the National Income and Product Accounts of the United States (NIPA)</a></cite> Units: T = Trillions
        </h2>
      </header>

      <div
        className={classnames('bar-chart__container')}
        ref={(elem) => { this.chart = elem; }}
      />
    </div>);
  }
}

BarChart.propTypes = {
  error: node.isRequired,
  fetching: bool.isRequired,
  getData: func.isRequired,
  data: array.isRequired,
};

BarChart.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
