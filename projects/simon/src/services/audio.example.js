function Audio() {
  const audio = new (window.AudioContext || window.webkitAudioContext)();
  const aux = audio.createGain();
  const vol = 0.5;
  aux.gain.value = vol;
  aux.connect(audio.destination);
  this.play = (f, duration) => {
    const osc = audio.createOscillator();
    osc.frequency.value = f;
    osc.connect(aux);
    osc.start(audio.currentTime);
    setTimeout(() => { osc.stop(audio.currentTime); osc.disconnect(aux); }, duration);
  }
}
const audio = new Audio();
const notes = [ 260.74, 330, 391.11, 521.48 ]
const bpm = 126;
const q = (60 * 1000) / bpm;
function arp(arr, t, i) {
  const ii = (i === undefined) ? 0: i;
  audio.play(arr[ii], t);
  setTimeout(() => arp(arr, t, ii + 1), t * 2);
};

arp(notes, q, 0);

/*
for (let i = 0; i < notes.length; i += 1) {
  const e = t * 2;
  setTimeout( () => audio.play(notes[i], t), e * (i + 1));
}
*/
