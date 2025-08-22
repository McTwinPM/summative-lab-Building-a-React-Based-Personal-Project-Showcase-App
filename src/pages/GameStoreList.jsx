import { Link, useOutletContext } from "react-router-dom";

function GameStoreList() {
  const { stores } = useOutletContext();

  const displayStores = stores || [];

  return (
    <div>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <Link to={`/game-stores/${store.id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameStoreList;