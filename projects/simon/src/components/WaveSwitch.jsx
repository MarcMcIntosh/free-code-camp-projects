import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Constants from '../Constants';
import { onToggleWave } from '../actions';
import Button from './Button';
import WaveIcons from './WaveIcons';

const mapStateToProps = state => ({
  wave: state.wave,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onToggleWave()),
});

const ModeSwitch = ({
  wave,
  classnames,
  ...props
}) => (<Button {...props} value={wave} >
  <WaveIcons className={classnames.waveShape} wave={wave} />
</Button>);

ModeSwitch.propTypes = {
  wave: PropTypes.string,
  classnames: PropTypes.shape({
    waveShape: PropTypes.string,
  }),
};

const { WAVE } = Constants.CLASSNAMES;

ModeSwitch.defaultProps = { classnames: { waveShape: WAVE } };

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
