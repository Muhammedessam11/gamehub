import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE; // 👈 جاي من .env

const Signup = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post(`${API_BASE}/auth/signup`, { username, password }); // 👈 صححنا URL
      alert('Signup successful! You can now login.');
    } catch(err) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input 
        placeholder="Username" 
        value={username} 
        onChange={e=>setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e=>setPassword(e.target.value)} 
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
