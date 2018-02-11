/* eslint-disable */

const auth = {
  _id: '_design/auth',
  views: {
    email: function(doc) {
      if(doc.email) {
        emit(doc.email, null);
      } else if(doc.unverifiedEmail.email) {
        emit(doc.unverifiedEmail.email, null);
      }
    }.toString(),

    username: function(doc) {
      if(doc.username) {
        emit(doc.username, null);
      }
    }.toString(),

    /* verifyEmail: function(doc) {
      if(doc.unverifiedEmail && doc.unverifiedEmail.token) {
        emit(doc.unverifiedEmail.token, null);
      }
    }, emailUsername: function(doc) {
      emit(doc._id, null);
      if(doc.email) {
        emit(doc.email, null);
      } else if(doc.unverifiedEmail.email) {
        emit(doc.unverifiedEmail.email, null);
      }
    }, */

    passwordReset: function(doc) {
      if(doc.forgotPassword && doc.forgotPassword.token) {
        emit(doc.forgotPassword.token, null);
      }
    }.toString(),

    session: function(doc) {
      if(doc.session) {
        Object.keys(doc.session).forEach(function(key) { emit(key, doc._id); });
      }
    },
    /* expiredKeys: function(doc) {
      if(doc.session) {
        Object.values(doc.session).filter(function(key) {
          return key.expires;
        }).forEach(function(key) {
          emit(key.expires, { key: key, user: doc_id });
        });
      }
    }.toString(), */

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
