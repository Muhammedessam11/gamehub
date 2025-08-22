import React from 'react';
import GameCard from '../components/GameCard';

const games = [
  {name: 'TicTacToe', description: 'Classic Tic-Tac-Toe game'},
  {name: 'Snake', description: 'Move the snake and grow longer'},
  {name: '2048', description: 'Combine tiles to reach 2048'}
];

const Home = () => {
  return (
    <div>
      <h1>GameHub</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {games.map((game,i)=> <GameCard key={i} {...game} />)}
      </div>
    </div>
  );
};

export default Home;
