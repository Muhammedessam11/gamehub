import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE; // 👈 من .env

const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, { username, password }); // 👈 استخدمنا الـ API_BASE
      alert('Login success! Token: ' + res.data.token);
    } catch(err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
