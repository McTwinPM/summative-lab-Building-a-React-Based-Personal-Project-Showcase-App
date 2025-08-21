import Navbar from '../components/Navbar';
import { useState } from 'react';

function Games() {
  const [stores, setStores] = useState([]);
  

  return (
    <>
      <Navbar />
      <div>
        <h1>Game Stores</h1>
        {/* <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}

export default Games;
