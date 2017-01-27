import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onSetVolume } from '../actions';
import Button from './Button';
import Constants from '../Constants';

const mapStateToProps = state => ({
  vol: state.volume,
});

const mapDispatchToProps = dispatch => ({
  setVolume: val => dispatch(onSetVolume(val)),
});

const Volume = ({
  vol,
  setVolume,
  config,
  ...props
}) => {
  const handleClick = event => setVolume(vol + Number(event.target.value));
  return (<span {...props}>
    <Button className={config.DEC} value="-10" onClick={handleClick} disabled={(vol <= 0)}>
    -</Button>
    {vol / 10}
    <Button className={config.INC} value="10" disabled={(vol >= 100)} onClick={handleClick}>
    +</Button>
  </span>);
};

Volume.propTypes = {
  vol: PropTypes.number,
  setVolume: PropTypes.func,
  config: PropTypes.shape({
    DEC: PropTypes.string,
    INC: PropTypes.string,
  }),
};

const { DEC, INC } = Constants.CLASSNAMES.BTN;
Volume.defaultProps = { config: { DEC, INC } };


export default connect(mapStateToProps, mapDispatchToProps)(Volume);
