import { json, useOutletContext, useParams } from "react-router-dom"
import gamesMartData from "../GamesMartData";


function GameCard() {
    const { stores, setStores } = useOutletContext();
    const { storeId, gameId } = useParams();

    const store = stores.find((s) => s.id === parseInt(storeId));
    if (!store) return <div>Store not found</div>;
    const game = store?.games.find((g) => g.id === parseInt(gameId));

    if (!game) return <div>Game not found</div>;

    const handlePriceChange = (newPrice) => {
    setStores(stores =>
        stores.map(s =>
            s.id === parseInt(storeId)
                ? {
                    ...s,
                    games: s.games.map(g =>
                        g.id === parseInt(gameId)
                            ? { ...g, price: newPrice }
                            : g
                    ),
                }
                : s
        )
    );
};

    return (
        <div className="game-card">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <p>tags: {game.tags}</p>
            <p>Price: ${game.price}</p>
            <button onClick={() => handlePriceChange(game.price + 1)}>Increase Price</button>
        </div>
    );
}

export default GameCard;