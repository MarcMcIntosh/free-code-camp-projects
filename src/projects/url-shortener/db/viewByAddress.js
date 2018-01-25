const ddoc = {
  _id: '_design/by_address',
  views: {
    by_address: { map: function (doc) { emit(doc.address); }.toString() }, // eslint-disable-line
  },
};

module.exports = ddoc;
