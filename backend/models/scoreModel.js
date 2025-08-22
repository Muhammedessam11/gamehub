const db = require('./db');

const Score = {
  add: (user_id, game, score, callback) => {
    db.query('INSERT INTO scores (user_id,game,score) VALUES (?,?,?)', [user_id,game,score], callback);
  },
  getLeaderboard: (game, callback) => {
    db.query(
      'SELECT u.username, s.score FROM scores s JOIN users u ON s.user_id=u.id WHERE s.game=? ORDER BY s.score DESC LIMIT 10',
      [game],
      callback
    );
  }
};

module.exports = Score;
