module.exports = ({
  production = false, browser = false, limit = 8192,
} = {}) => {
  const name = production ? '[hash].[ext]' : '[path]-[name].[ext]';
  return [{
    test: /\.(gif|svg|woff(2)?|ttf|eot)$/,
    loader: 'url-loader',
    options: { limit, name },
  }, {
    test: /\.(png|jpg|jpeg)$/,
    loader: 'file-loader',
    options: { name, emitFile: browser },
  }];
};

/*
module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff(2)?|ttf|eot)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit },
  include: PATHS.src.client,
});

module.exports = ({
  browser = false,
} = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff(2)?|ttf|eot)$/,
  loader: 'file-loader',
  options: { emitFile: browser },
});
*/
