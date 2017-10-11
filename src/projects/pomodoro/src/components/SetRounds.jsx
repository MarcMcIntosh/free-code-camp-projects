import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onSetMaxRounds } from '../actions';

const mapStateToProps = state => ({
  totalRounds: state.max_rounds,
  running: state.running,
  round: state.round,
});

const mapDispatchToProps = dispatch => ({
  setMaxRounds: val => dispatch(onSetMaxRounds(val)),
});

class SetRounds extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setMaxRounds(this.props.default);
  }
  handleChange(event) {
    this.props.setMaxRounds(+event.target.value);
  }
  render() {
    const {
      max,
      min,
      running,
      totalRounds,
      className,
      classnames,
    } = this.props;
    return (<section className={className}>
      {totalRounds}
      <input
        className={classnames.input}
        type="range"
        min={min}
        max={max}
        disabled={running}
        value={totalRounds}
        onChange={this.handleChange}
      />
    </section>);
  }
}

const { string, number, bool, func, shape } = PropTypes;
SetRounds.propTypes = {
  className: string,
  min: number,
  max: number,
  default: number,
  totalRounds: number,
  setMaxRounds: func,
  running: bool,
  classnames: shape({ input: string }),
};

SetRounds.defaultProps = {
  default: 5,
  min: 1,
  max: 10,
  classnames: { input: '' },
};

export default connect(mapStateToProps, mapDispatchToProps)(SetRounds);
