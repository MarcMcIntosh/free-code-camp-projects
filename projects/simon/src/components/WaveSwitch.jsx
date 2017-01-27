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
  config,
  ...props
}) => (<Button value={wave} {...props}>
  <WaveIcons className={config.WAVE} wave={wave} />
</Button>);

ModeSwitch.propTypes = {
  wave: PropTypes.string,
  config: PropTypes.shape({
    WAVE: PropTypes.string,
  }),
};

const { WAVE } = Constants.CLASSNAMES;

ModeSwitch.defaultProps = { config: { WAVE } };

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
