import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE; // 👈 ده اللي جاي من .env

export default function App() {
  const [health, setHealth] = useState("...");
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/games/scores/TicTacToe`)   // 👈 استبدل
      .then((r) => r.json())
      .then((data) => setScores(data))
      .catch(() => setScores([]));

    fetch(`${API_BASE}/health`)                  // 👈 استبدل
      .then((r) => r.json())
      .then((d) => setHealth(d.status || "ok"))
      .catch(() => setHealth("down"));
  }, []);

  const signup = async () => {
    await fetch(`${API_BASE}/auth/signup`, {     // 👈 استبدل
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    alert("Signup done — now login.");
  };

  const login = async () => {
    const res = await fetch(`${API_BASE}/auth/login`, {  // 👈 استبدل
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
      <p>Health: {health}</p>

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
        {scores.map((s, i) => (
          <li key={i}>{s.username}: {s.score}</li>
        ))}
      </ul>
    </div>
  );
}

