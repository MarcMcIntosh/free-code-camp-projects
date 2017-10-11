import React, { Component } from 'react';
import KeyBoard from './components/KeyBoard';
import Wave from './components/WaveSwitch';
import Mode from './components/ModeSwitch';
import Round from './components/Round';
import StartButton from './components/StartButton';
import ResetButton from './components/ResetButton';
import Volume from './components/Volume';

class Simon extends Component {
  constructor(props) {
    super(props);
    this.state = { showSettings: false };
    this.showSettings = this.showSettings.bind(this);
  }

  showSettings() { this.setState({ showSettings: !this.state.showSettings }); }

  render() {
    return (<div className="simon simon--theme-dark" >

      <h1 className="simon__header">Simon says <small className="simon__round">Round: </small>
        <Round className="simon__number" />
        <button
          type="button"
          title="settings"
          tabIndex="0"
          onClick={this.showSettings}
          className="material-icons md-24 simon__menu"
        >{(!this.state.showSettings) ? 'settings' : 'close'}</button>
      </h1>

      {(this.state.showSettings) ? (<section className="simon__settings">

        <Mode
          className="mdc-button mdc-button--primary mdc-button--raised simon__difficulty--mode"
        />

        <h2 className="simon__volume">
        Volume <Volume className="mdc-range-slider simon__volume" /></h2>

        <Wave className="mdc-button mdc-button--accent mdc-button--raised simon__wave" />

        <p className="mdc-typography--body1">
          <span className="mdc-typography--body2"> Contol Keys</span> h j k l </p>

      </section>) : null }

      <StartButton className="material-icons md-24 simon__start">play_circle_outline</StartButton>

      <ResetButton className="material-icons md-24 simon__reset">replay</ResetButton>

      <KeyBoard ctKeys={['h', 'j', 'k', 'l']} />

    </div>);
  }
}

export default Simon;
