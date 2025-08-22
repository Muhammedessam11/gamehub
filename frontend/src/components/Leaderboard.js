import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE; // 👈 جاي من .env

const Leaderboard = ({game}) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/games/scores/${game}`) // 👈 استخدمنا API_BASE
      .then(res => setScores(res.data))
      .catch(err => console.error("Failed to fetch scores:", err));
  }, [game]);

  return (
    <div>
      <h3>Leaderboard - {game}</h3>
      <ul>
        {scores.map((s, i) => (
          <li key={i}>{s.username}: {s.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
