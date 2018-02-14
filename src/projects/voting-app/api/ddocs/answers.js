/* eslint-disable */

const answers = {
  _id: '_design/answers',
  views: {
    created_by: {
      map: function(doc) {
        if (doc.type === 'answer' && doc.created_by) { emit(doc.created_by); }
      },
    },
    question: {
      map: function(doc) {
        if (doc.type === 'answer' && doc.question) { emit(doc.question, doc.answer); }
      },
    },
    votes: {
      map: function(doc) {
        if (doc.type === 'vote' && Object.prototype.hasOwnProperty.call(doc, 'answer')) {
          emit(doc.answer);
        }
      },
      reduce: '_count',
    }
  }
}

module.exports = answers;
