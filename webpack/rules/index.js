const images = require('./images');
const scripts = require('./scripts');
const styles = require('./styles');

module.exports = ({ production = false, browser = false } = {}) => {
  const js = scripts({ production, browser });
  const css = styles({ production, browser });
  // const imgs = images();
  const imgs = images({ browser });
  return [].concat(js, css, imgs);
  // return [].concat(js, css);
};
