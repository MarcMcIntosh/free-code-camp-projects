import React, { Component } from 'react';
import { string, bool, func, oneOfType, array } from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Chart from './components/Chart';

import cx from './styles';

const mapStateToProps = state => ({
  data: state.data,
  fetching: state.fetching,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(fetchData()),
});

class BarChart extends Component {
  componentDidMount() { this.props.getData(); }
  render() {
    return (<div className={cx('bar-chart')}>
      <h1 className={cx('bar-chart__heading')}>{'US Gross Domestic Product'}</h1>

      <div className={cx('bar-chart__container')} >
        <Loader loading={this.props.fetching} />
        <ErrorMessage message={this.props.error} onClick={this.props.getData} />
        {this.props.data && <Chart classnames={cx} data={this.props.data} />}
      </div>
    </div>);
  }
}

BarChart.propTypes = {
  error: string.isRequired,
  fetching: bool.isRequired,
  getData: func.isRequired,
  data: oneOfType([bool, array]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
