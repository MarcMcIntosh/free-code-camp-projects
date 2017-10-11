import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import formatTime from '../util/formatTime';

const mapStateToProps = state => ({
  round: state.round,
  time: state.time,
});

const TimeDisplay = ({
  time,
  round,
  classnames,
  className,
}) => (<section className={className}>
  <h1 className={classnames.time}>{formatTime(time)}</h1>
  <h2 className={classnames.round}>{round}</h2>
</section>);

const { number, shape, string } = PropTypes;
TimeDisplay.propTypes = {
  className: string,
  time: number,
  round: number,
  classnames: shape({ time: string, round: string }),
};

TimeDisplay.defaultProps = { classnames: { time: '', round: '' } };

export default connect(mapStateToProps)(TimeDisplay);
