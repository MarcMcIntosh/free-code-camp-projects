const data = require('./data/cyclist-data.json');

const fastestTime = data.reduce((a, b) => {
  return (a.Seconds < b.Seconds) ? a.Seconds : b.Seconds;
});

console.log(fastestTime);
