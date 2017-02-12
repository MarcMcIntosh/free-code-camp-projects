import React from 'react';
import { connect } from 'react-redux';
import { onSetVolume } from '../actions';

const mapStateToProps = state => ({
  value: state.volume,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(onSetVolume(+event.target.value)),
});

const Volume = props => (
  <input {...props} type="range" min={0} max={100} step={10} />
);

export default connect(mapStateToProps, mapDispatchToProps)(Volume);
