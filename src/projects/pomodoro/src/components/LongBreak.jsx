import React, { Component } from 'react';
import { number, string, func, bool, shape } from 'prop-types';

import { connect } from 'react-redux';
import { onSetLongBreak } from '../actions';

const mapStateToProps = state => ({
  time: state.long_break,
  running: state.running,
});

const mapDispatchToProps = dispatch => ({
  setBreak: n => dispatch(onSetLongBreak(n)),
});

class LongBreak extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setBreak(this.props.default * 60000);
  }
  handleChange(event) {
    this.props.setBreak(event.target.value * 60000);
  }
  render() {
    const {
      time,
      min,
      max,
      running,
      className,
      classnames,
    } = this.props;
    const t = time / 60000;
    return (<section className={className}>
      {t}
      <input
        className={classnames.input}
        type="range"
        min={min}
        max={max}
        value={t}
        disabled={running}
        onChange={this.handleChange}
      />
    </section>);
  }
}

const { number, string, func, bool, shape } = PropTypes;

LongBreak.propTypes = {
  default: number,
  className: string,
  min: number,
  max: number,
  time: number,
  setBreak: func,
  running: bool,
  classnames: shape({ input: string }),
};

LongBreak.defaultProps = {
  default: 15,
  min: 1,
  max: 30,
  classnames: { input: '' },
};

export default connect(mapStateToProps, mapDispatchToProps)(LongBreak);
