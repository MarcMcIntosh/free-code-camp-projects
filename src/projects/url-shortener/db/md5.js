const { createHash } = require('crypto');

module.exports = function md5(str) { return createHash('md5').update(str).digest('hex'); };
