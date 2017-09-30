// const PATHS = require('../paths');
// add json to url-loader ?
//
module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff(2)?|ttf|eot)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit },
  // include: PATHS.app
});
