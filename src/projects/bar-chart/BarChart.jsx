import React, { PureComponent } from 'react';
import {
  func,
  array,
  node,
  bool,
} from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { fetchData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import styles from './styles/bar-chart.scss';

import draw from './bar-chart';

const mapStateToProps = ({ barChart: { data, fetching, error } }) => ({ data, fetching, error });

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(fetchData()),
});

class BarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = draw;
    this.classnames = classnames.bind(styles);
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.props.getData(); }
  componentDidUpdate(prevProps) {
    if (this.props.data.length && this.props.data.length !== prevProps.data.length) {
      this.draw(this.chart, this.props.data, this.classnames);
    }
  }
  render() {
    const { fetching, error, getData } = this.props;
    return (<div className={this.classnames('bar-chart')}>
      {error && <ErrorMessage onClick={getData}>{error}</ErrorMessage>}
      {fetching && <Loader /> }
      <header className={this.classnames('bar-chart__primary')}>
        <h1 className={this.classnames('bar-chart__title')}>
          US Gross Domestic Product
        </h1>
        <h2 className={this.classnames('bar-chart__subtitle')}>Seasonally adjusted annual rates <cite><a href="http://www.bea.gov/national/pdf/nipaguid.pdf">A Guide to the National Income and Product Accounts of the United States (NIPA)</a></cite> Units: T = Trillions
        </h2>
      </header>

      <div
        className={this.classnames('bar-chart__container')}
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

BarChart.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
export redcuer from './reducer';
