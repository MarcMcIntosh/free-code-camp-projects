
function createUserDoc(username, salt, hash) {
  const timestamp = new Date().toJSON();
  /* add login attempts field */
  return {
    type: 'user',
    created_at: timestamp,
    updated_at: timestamp,
    failedLoginAttempts: 0,
    lockedUntil: 0,
    username,
    salt,
    hash,
  };
}

module.exports = createUserDoc;
