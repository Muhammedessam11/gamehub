const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = (req,res)=>{
  const {username,password} = req.body;
  const hash = bcrypt.hashSync(password,10);
  User.create(username, hash, (err,result)=>{
    if(err) return res.status(500).json({error:err});
    res.json({success:true});
  });
};

exports.login = (req,res)=>{
  const {username,password} = req.body;
  User.findByUsername(username,(err,results)=>{
    if(err) return res.status(500).json({error:err});
    if(results.length===0) return res.status(400).json({error:"User not found"});
    const user = results[0];
    if(!bcrypt.compareSync(password,user.password_hash)) return res.status(400).json({error:"Wrong password"});
    const token = jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.json({token});
  });
};
