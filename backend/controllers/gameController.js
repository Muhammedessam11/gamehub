const Score = require('../models/scoreModel');

exports.getLeaderboard = (req,res)=>{
  const game = req.params.game;
  Score.getLeaderboard(game,(err,results)=>{
    if(err) return res.status(500).json({error:err});
    res.json(results);
  });
};

exports.addScore = (req,res)=>{
  const {user_id,game,score} = req.body;
  Score.add(user_id,game,score,(err,result)=>{
    if(err) return res.status(500).json({error:err});
    res.json({success:true});
  });
};
