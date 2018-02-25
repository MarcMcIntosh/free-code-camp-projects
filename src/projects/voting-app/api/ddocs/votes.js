/* eslint-disable */

const votes = {
  _id: '_design/votes',
  views: {
    created_by: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.created_by && doc.question) {
          emit(doc.created_by, { question: doc.question, answer: doc.answer || '' });
        }
      }.toString(),
    },
    created_by_on_question: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.question && doc.created_by) {
          emit([doc.created_by, doc.question]);
        }
      }.toString(),
    },
    answer: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.answer) { emit(doc.answer); }
      }.toString(),
    },
    question: {
      map: function(doc) {
        if (doc.type === 'vote' && doc.question) { emit(doc.question, doc.answer); }
      }.toString(),
    },
  }
}

module.exports = votes;
