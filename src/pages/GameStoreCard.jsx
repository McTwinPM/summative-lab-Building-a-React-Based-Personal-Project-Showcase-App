import { Outlet, Link, useOutletContext, useParams } from "react-router-dom";
import { useState } from 'react';
import SearchBar from "../components/SearchBar";

function GameStoreCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const { storeId } = useParams();
  const outletContext = useOutletContext() || {};
  const { stores = [], setStores } = outletContext;

  const store = stores.find((s) => s.id === parseInt(storeId));

  if (!store) {
    return <div>Store not found</div>;
  }
  function addGameToStore(newGame) {
    setStores((stores) =>
      stores.map((store) =>
        store.id === parseInt(storeId)
          ? { ...store, games: [...store.games, newGame] }
          : store
      )
    );
  }
  const filteredGames = store.games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>{store.location}</h2>
      <p>{store.description}</p>
      <p>{store.phone_number}</p>
      <h3>Games:</h3>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>
            <Link to={`/game-stores/${storeId}/games/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ stores, addGameToStore }} />
    </div>
  );
}
export default GameStoreCard;