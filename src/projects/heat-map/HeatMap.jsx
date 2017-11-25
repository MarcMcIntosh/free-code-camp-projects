import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  bool,
  oneOfType,
  object,
} from 'prop-types';

import { fetchData } from './actions';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import heatMap from './heat-map';

const mapStateToProps = ({ heatMap: { data, error, fetching } }) => ({ data, error, fetching });

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});

class HeatMap extends PureComponent {
  componentDidMount() {
    if (!this.props.data) { this.props.onFetchData(); }
  }
  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.data).length === 0 && Object.keys(this.props.data) > 0) {
      heatMap(this.container, this.props.data);
    }
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('heat-map')}>
      {this.props.fetching && (<Loader />)}
      <header className={classnames('heat-map__header')}>
        <h1 className={classnames('heat-map__title')}>
          Title
        </h1>
        <h2 className={classnames('heat-map__subtitle')}>
          Subtitle
        </h2>
        {this.props.error && (<ErrorMessage onClick={this.props.onFetchData}>{String(this.props.error)}</ErrorMessage>)}
      </header>

      <div className="heat-map__container" ref={(c) => { this.container = c; }} />
    </div>);
  }
}

HeatMap.propTypes = {
  onFetchData: func.isRequired,
  error: oneOfType([
    bool,
    instanceOf(Error),
  ]).isRequired,
  fetching: bool.isRequired,
  data: object.isRequired,
};

HeatMap.contextTypes = { classnames: func.isRequired };


export default connect(mapStateToProps, mapDispatchToProps)(HeatMap);
