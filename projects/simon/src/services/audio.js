function Audio(vol) {
  const audio = new (window.AudioContext || window.webkitAudioContext)();
  const aux = audio.createGain();
  aux.gain.value = vol || 0;
  aux.connect(audio);
  this.vol = (v) => { aux.gain.value = v || 0; };
  this.mute = () => { aux.gain.value = 0; };
  this.playFor = (f, ms) => {
    const osc = audio.createOscillator();
    osc.frequency.value = f;
    osc.connect(aux);
    osc.start(audio.currentTime);
    osc.stop(audio.currentTime + (ms * 1000));
    osc.onended(() => { osc.disconnect(aux); });
  };
}
