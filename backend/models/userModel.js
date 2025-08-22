const db = require('./db');

const User = {
  create: (username, password_hash, callback) => {
    db.query('INSERT INTO users (username,password_hash) VALUES (?,?)', [username,password_hash], callback);
  },
  findByUsername: (username, callback) => {
    db.query('SELECT * FROM users WHERE username=?', [username], callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id=?', [id], callback);
  }
};

module.exports = User;
