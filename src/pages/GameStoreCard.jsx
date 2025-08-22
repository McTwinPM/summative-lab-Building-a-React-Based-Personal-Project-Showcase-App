import { Outlet, Link, useOutletContext, useParams } from "react-router-dom";

function GameStoreCard() {
  const { storeId } = useParams();
  const { stores } = useOutletContext();

  const store = stores.find((s) => s.id === parseInt(storeId));

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <div>
      <h2>{store.name}</h2>
      <p>{store.description}</p>
      <p>{store.phone_number}</p>
      <h3>Games:</h3>
      <ul>
        {store.games.map((game) => (
          <li key={game.id}>
            <Link to={`/game-stores/${storeId}/games/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ stores }} />
    </div>
  );
}
export default GameStoreCard;