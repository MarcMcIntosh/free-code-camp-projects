import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onSetSession } from '../actions';

const mapStateToProps = state => ({
  time: state.session,
  running: state.running,
});

const mapDispatchToProps = dispatch => ({
  setSession: n => dispatch(onSetSession(n)),
});

class SetSession extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setSession(this.props.default * 60000);
  }
  handleChange(event) {
    this.props.setSession(event.target.value * 60000);
  }
  render() {
    const {
      max,
      min,
      running,
      time,
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
        value={t}
        onChange={this.handleChange}
      />
    </section>);
  }
}

const { string, number, func, bool, shape } = PropTypes;
SetSession.propTypes = {
  default: number,
  className: string,
  min: number,
  max: number,
  time: number,
  running: bool,
  setSession: func,
  classnames: shape({ input: string }),
};

SetSession.defaultProps = {
  default: 25,
  min: 1,
  max: 60,
  classnames: { input: '' },
};

export default connect(mapStateToProps, mapDispatchToProps)(SetSession);
