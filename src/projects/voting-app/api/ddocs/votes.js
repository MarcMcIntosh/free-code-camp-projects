/* eslint-disable */

const votes = {
  _id: '_design/votes',
  views: {
    created_by: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.created_by) { emit(doc.created_by); }
      },
    },
    answer: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.answer) { emit(doc.answer); }
      },
    },
    question: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.question) { emit(doc.question, doc.answer); }
      },
    },
  }
}

module.exports = votes;
