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
      INC: 'up',
      DEV: 'down',
    },
    WAVE: 'wave',
    KEY: 'key',
    KEY_ACTIVE: (key, color, bool) => ((bool) ? `${key} ${color}--active` : `${key} ${color}`),
    KEYBOARD: 'keys',
  },
};
