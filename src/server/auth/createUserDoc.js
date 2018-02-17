
function createUserDoc(username, email, salt, hash) {
  const timestamp = Date.now();
  const local = { salt, hash, failedLoginAttempts: 0, lockedUntil: 0 };
  /* add login attempts field */
  return {
    email,
    username,
    local,
    type: 'user',
    created_at: timestamp,
    updated_at: timestamp,
  };
}

module.exports = createUserDoc;
