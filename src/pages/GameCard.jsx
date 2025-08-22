import { useOutletContext, useParams } from "react-router-dom"


function GameCard() {
    const { stores } = useOutletContext();
    const { storeId, gameId } = useParams();

    const store = stores.find((s) => s.id === parseInt(storeId));
    if (!store) return <div>Store not found</div>;
    const game = store?.games.find((g) => g.id === parseInt(gameId));

    if (!game) return <div>Game not found</div>;

    return (
        <div>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <p>tags: {game.tags}</p>
            <p>Price: ${game.price}</p>
        </div>
    );
}

export default GameCard;