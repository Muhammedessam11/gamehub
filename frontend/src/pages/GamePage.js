import React from 'react';
import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

const GamePage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Playing {name}</h1>
      <p>Game canvas would appear here.</p>
      <Leaderboard game={name} />
    </div>
  );
};

export default GamePage;
