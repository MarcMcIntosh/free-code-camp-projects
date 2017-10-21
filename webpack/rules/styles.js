const stylesCss = require('./stylesCss');
const stylesScss = require('./stylesScss');

module.exports = ({
  production = false,
  browser = false,
} = {}) => {
  const css = stylesCss({ production, browser });
  const scss = stylesScss({ production, browser });
  return [css, scss];
};
