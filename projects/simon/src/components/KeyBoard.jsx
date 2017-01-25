import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Key from './Key';
import Constants from '../Constants';

const mapStateToProps = state => ({
  vol: state.volume,
  notes: state.notes,
  wave: state.wave,
});

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.audio = new (window.AudioContext || window.webkitAudioContext)();
    this.aux = this.audio.createGain();
    this.aux.connect(this.audio.destination);
  }
  componentWillUnmount() { this.audio.close(); }
  render() {
    this.aux.gain.value = (this.props.vol / 100);
    const { notes, wave } = this.props;
    return (<div>{notes.map((d, i) => (
      <Key key={i} audio={this.audio} aux={this.aux} frequency={d} wave={wave} />
    ))}</div>);
  }
}
const { SIN, SQU, SAW, TRI } = Constants.WAVES;
KeyBoard.propTypes = {
  vol: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.number),
  wave: PropTypes.oneOf([SIN, SQU, SAW, TRI]),
};


export default connect(mapStateToProps, null)(KeyBoard);
