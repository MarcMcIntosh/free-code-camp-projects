/* eslint-disable */

const questions = {
  _id: '_design/questions',
  views: {
    created_by: {
      map: function(doc) {
        if (doc.type === 'question' && doc.created_by) { emit(doc.created_by, doc.question); }
      }.toString(),
    },
    created_at: {
      map: function(doc) {
        if (doc.type === 'question' && Object.prototype.hasOwnProperty.call(doc, 'question') && Object.prototype.hasOwnProperty.call(doc, 'created_at')) {
          emit(doc.created_at, doc.question);
        }
      }.toString(),
    },
    related_to: {
      map: function(doc) {
        if(doc.type === 'question') {
          emit(doc._id);
        } else if (doc.type === 'answer' && doc.question) {
          emit(doc.question);
        } else if (doc.type === 'vote' && doc.question) {
          emit(doc.question)
        }
      }
    },
    answers: {
      map: function(doc) {
        if (doc.type === 'answer' && Object.prototype.hasOwnProperty.call(doc, 'question') && Object.prototype.hasOwnProperty.call(doc, 'answer')) {
          emit(doc.question, doc.answer);
        }
      }.toString(),
    },
    votes: {
      map: function(doc) {
        if (doc.type === 'vote' && Object.prototype.hasOwnProperty.call(doc, 'question') && Object.prototype.hasOwnProperty.call(doc, 'answer') ) {
          emit(doc.question, doc.answer);
        }
      }.toString(),
      reduce: '_count',
    },
  }
}

module.exports = questions;
