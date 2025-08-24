import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE; // جاي من .env

export default function App() {
  const [health, setHealth] = useState("Checking backend...");
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");

  useEffect(() => {
    // تحقق من أن الـ backend شغال
    fetch(`${API_BASE}`)
      .then(() => setHealth("Backend is running"))
      .catch(() => setHealth("Backend down"));

    // جلب leaderboard للعبة TicTacToe
    fetch(`${API_BASE}/scores/TicTacToe`)
      .then(r => r.json())
      .then(data => setScores(data))
      .catch(() => setScores([]));
  }, []);

  const signup = async () => {
    await fetch(`${API_BASE}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    alert("Signup done — now login.");
  };

  const login = async () => {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
    else alert("Login failed");
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>GameHub</h1>
      <p>Status: {health}</p>

      <h2>Auth</h2>
      <input
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        style={{ marginRight: 8 }}
      />
      <input
        placeholder="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        style={{ marginRight: 8 }}
      />
      <button onClick={signup} style={{ marginRight: 8 }}>Signup</button>
      <button onClick={login}>Login</button>
      {token ? <p style={{ wordBreak: "break-all" }}>JWT: {token}</p> : null}

      <h2 style={{ marginTop: 32 }}>Leaderboard — TicTacToe</h2>
      <ul>
        {scores.length > 0 ? scores.map((s, i) => (
          <li key={i}>{s.username}: {s.score}</li>
        )) : <li>No scores yet</li>}
      </ul>
    </div>
  );
}
