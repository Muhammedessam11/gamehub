import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({name, description}) => {
  return (
    <div style={{border:'1px solid #ccc',padding:'10px',margin:'10px',borderRadius:'5px'}}>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/game/${name.toLowerCase()}`}>Play Now</Link>
    </div>
  );
};

export default GameCard;
