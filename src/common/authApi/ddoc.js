/* eslint-disable */

const users = {
  _id: '_design/users',
  views: {
    username: {
      map: function(doc) { if(doc.type === 'user' && doc.local && doc.local.username) {
        emit(doc.local.username, null);
      } }.toString(),
    }
    /* Passport providers */
    /* facebook: function(doc) {
      if(doc.facebook && doc.facebook.profile) {
        emit(doc.facebook.profile.id, null);
      }
    }.toString(),

    github: function(doc) {
      if(doc.github && doc.github.profile) {
        emit(doc.github.profile.id, null);
      }
    }.toString(),

    linkedin: function(doc) {
      if(doc.linkedin && doc.linkedin.profile) {
        emit(doc.linkedin.profile.id, null);
      }
    }.toString(),

    twitter: function(doc) {
      if(doc.twitter && doc.twitter.profile) {
        emit(doc.twitter.profile.id, null);
      }
    }.toString(), */
  }
};

module.exports = users;
