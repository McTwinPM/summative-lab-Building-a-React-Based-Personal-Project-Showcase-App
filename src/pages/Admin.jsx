import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

function Admin() {
  const [games, setGames] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('/api/game-stores');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        setStores(data);
      } catch (error) {
        setStores(gamesMartData.stores);
      }
    };

    fetchStores();
  }, []);

  function handleSubmitStores(event) {
    event.preventDefault();
    const newStore = {
      id: Date.now(),
      location: event.target.location.value,
      description: event.target.description.value,
      phone_number: event.target.phone_number.value,
    };
    setStores([...stores, newStore]);
  }

  function handleSubmitGame(event) {
    event.preventDefault();
    const newGame = {
      id: Date.now(),
      name: event.target.name.value,
      description: event.target.description.value,
      tags: event.target.tags.value.split(',').map(tag => tag.trim()),
      price: parseFloat(event.target.price.value),
    };
    setGames([...games, newGame]);
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Admin</h1>
        <form onSubmit={handleSubmitStores}>
          <input type="text" name="location" placeholder="Location" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="phone_number" placeholder="Phone Number" required />
          <button type="submit">Add Store</button>
        </form>
        <form onSubmit={handleSubmitGame}>
          <input type="text" name="name" placeholder="Game Name" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="tags" placeholder="Tags (comma separated)" required />
          <input type="number" name="price" placeholder="Price" required />
          <button type="submit">Add Game</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
