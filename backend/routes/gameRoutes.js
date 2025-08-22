const express = require('express');
const router = express.Router();
const {getLeaderboard,addScore} = require('../controllers/gameController');

router.get('/scores/:game',getLeaderboard);
router.post('/scores',addScore);

module.exports = router;
