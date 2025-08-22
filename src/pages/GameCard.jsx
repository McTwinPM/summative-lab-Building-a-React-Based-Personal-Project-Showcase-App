import { useOutletContext, useParams } from "react-router-dom"


function GameCard() {
    const { stores, setStores } = useOutletContext();
    const { storeId, gameId } = useParams();

    const store = stores.find((s) => s.id === parseInt(storeId));
    if (!store) return <div>Store not found</div>;
    const game = store?.games.find((g) => g.id === parseInt(gameId));

    if (!game) return <div>Game not found</div>;

    const handlePriceChange = (newPrice) => {
        // Update the game price
        fetch(`/api/game-stores/${storeId}/games/${gameId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...game, price: newPrice }),
        })
        .then((response) => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
        })
        .then((updatedGame) => {
            // Update the local state with the new game data
            const updatedStores = stores.map((s) => {
                if (s.id === parseInt(storeId)) {
                    return {
                        ...s,
                        games: s.games.map((g) => (g.id === parseInt(gameId) ? updatedGame : g)),
                    };
                }
                return s;
            });
            setStores(updatedStores);
        })
        .catch((error) => {
            console.error('Error updating game price:', error);
        });
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