import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, instanceOf, bool, oneOfType, array } from 'prop-types';

import { fetchData } from './actions';
import { MAIN_TITLE, SUB_TITLE } from './constants';
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
        <h1 className={classnames('scatterplot__title')}>{MAIN_TITLE}</h1>
        <h2 className={classnames('scatterplot__sub-title')}>{SUB_TITLE}</h2>
      </header>

      <ErrorMessage className={classnames('scatterplot__error')} err={(this.props.error && true)} onclick={this.props.onFetchData} />

      <Loader isLoading={this.props.fetching} className={classnames('scatterplot__loader')} />

      <div className={classnames('scatterplot__container')} ref={(c) => { this.root = c; }} />
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
