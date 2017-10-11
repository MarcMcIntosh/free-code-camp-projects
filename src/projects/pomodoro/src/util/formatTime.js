module.exports = function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const ss = seconds - (minutes * 60);
  const strS = (ss < 10) ? `0${ss}` : ss;
  const strM = (minutes < 10) ? `0${minutes}` : minutes;
  return `${strM}:${strS}`;
};
