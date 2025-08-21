import NavBar from '../components/NavBar';
import { useState } from 'react';

function Games() {
  const [games, setGames] = useState([]);

  return (
    <div>
      <NavBar />
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Games;
