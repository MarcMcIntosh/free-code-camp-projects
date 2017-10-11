import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onSetShortBreak } from '../actions';

const mapStateToProps = state => ({
  time: state.short_break,
  running: state.running,
});

const mapDispatchToProps = dispatch => ({
  setBreak: n => dispatch(onSetShortBreak(n)),
});

class ShortBreak extends Component {
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
        disabled={running}
        onChange={this.handleChange}
        value={t}
      />
    </section>);
  }
}

const { number, string, func, bool, shape } = PropTypes;

ShortBreak.propTypes = {
  default: number,
  className: string,
  min: number,
  max: number,
  running: bool,
  time: number,
  setBreak: func,
  classnames: shape({ input: string }),
};

ShortBreak.defaultProps = {
  default: 5,
  min: 1,
  max: 15,
  classnames: { input: '' },
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortBreak);
