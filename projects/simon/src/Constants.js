const PYTHAGOREAN = require('./lib/pythagorean');

module.exports = {
  SCALES: { PYTHAGOREAN },
  WAVES: {
    SIN: 'sine',
    SQU: 'square',
    SAW: 'sawtooth',
    TRI: 'triangle',
  },
  MODE: {
    NORMAL: 'normal',
    HARD: 'hard',
  },
  COLORS: {
    NORMAL: ['red', 'orange', 'green', 'blue'],
    HARD: [...Array(6)].fill('white'),
  },
  CLASSNAMES: {
    BTN: {
      PLAY: 'play',
      STOP: 'reset',
    },
    WAVE: 'wave',
    KEY: 'key',
    KEYBOARD: 'keys',
  },
};
