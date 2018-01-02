import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, string, array, object } from 'prop-types';
import classnames from './styles';
import { fetchData, fetchFlags } from './actions';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import useTheForce from './use-the-force';

const mapStateToProps = ({ forceDirected: { data, flags, error, ...state } }) => ({
  error,
  data,
  flags,
  fetching: state.fetching_data || state.fetching_flags,
  hasData: !state.fetching_data && Object.keys(data).length > 0,
  hasFlags: !state.fetching_flags && flags.length > 0,
});

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
  onFetchFlags: () => dispatch(fetchFlags()),
});

class ForceDirected extends Component {
  constructor(props) {
    super(props);
    this.getJson = this.getJson.bind(this);
    this.useTheForce = useTheForce;
    this.draw = this.draw.bind(this);
    this.classnanmes = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.getJson(); }

  componentDidUpdate(prevProps) {
    const didDraw = prevProps.hasData && prevProps.hasFlags;
    const canDraw = this.props.hasData && this.props.hasFlags;
    if (!didDraw && canDraw) { this.draw(); }
  }
  getJson() {
    if (!this.props.hasFlags) { this.props.onFetchFlags(); }
    if (!this.props.hasData) { this.props.onFetchData(); }
  }
  draw() {
    if (this.props.hasData && this.props.hasFlags) {
      this.useTheForce(this.root, this.props.data, this.props.flags, this.classnames);
    }
  }
  render() {
    return (<div className={this.classnames('force-directed')}>
      {this.props.fetching && (<Loader />)}
      <header className={this.classnames('force-directed__header')}>
        <h1 className={this.classnames('force-directed__title')}>
          National Contiguity
        </h1>
        <h2 className={this.classnames('force-directed__subtitle')}>
          Countries linked by shared boarders
        </h2>
        <ErrorMessage onClick={this.getJson}>{this.props.error}</ErrorMessage>
      </header>

      <div ref={(c) => { this.root = c; }} className={this.classnames('force-directed__container')} />
    </div>);
  }
}

ForceDirected.propTypes = {
  error: string.isRequired,
  data: object.isRequired,
  flags: array.isRequired,
  fetching: bool.isRequired,
  hasFlags: bool.isRequired,
  hasData: bool.isRequired,
  onFetchData: func.isRequired,
  onFetchFlags: func.isRequired,
};

ForceDirected.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(ForceDirected);
