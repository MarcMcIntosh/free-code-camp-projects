
function createUserDoc(username, salt, hash) {
  const timestamp = new Date().toJSON();
  const local = { username, salt, hash, failedLoginAttempts: 0, lockedUntil: 0 };
  /* add login attempts field */
  return {
    local,
    type: 'user',
    created_at: timestamp,
    updated_at: timestamp,
  };
}

module.exports = createUserDoc;
