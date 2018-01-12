function _get_ip(req) {
  if(req.headers['x-forwarded-for']) {
    return req.headers['x-forwarded-for'].split(',')[0];
  }
  return req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || 'not found';
}

function _get_language(headers) {
  if(headers['accept-language']){
    return headers['accept-language'].split(',')[0];
  }
  return 'not found';
}

function _get_software(headers) {
  if(headers['user-agent']) {
    return headers['user-agent'].match(/\((.*?)\)/)[1];
  }
  return 'not found';
}

module.exports = function(req) {
  return {
    address: _get_ip(req),
    language: _get_language(req.headers),
    software: _get_software(req.headers),
  }
};
