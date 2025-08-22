import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import gamesMartData from '../GamesMartData';

function Admin({ stores, setStores }) {

  function handleSubmitStores(event) {
    event.preventDefault();
    const newStore = {
      id: Date.now(),
      location: event.target.location.value,
      description: event.target.description.value,
      phone_number: event.target.phone_number.value,
      games: [],
    };
    setStores([...stores, newStore]);
    setStores(stores =>
    stores.map(store =>
      store.location === event.target.location.value
        ? { ...store, games: [...(store.games || []), newGame] }
        : store
    )
  );
    event.target.reset();
    console.log('New store added:', newStore);
  }

  function handleSubmitGame(event) {
    event.preventDefault();
    const newGame = {
      id: Date.now(),
      location: event.target.location.value,
      name: event.target.name.value,
      description: event.target.description.value,
      tags: event.target.tags.value.split(',').map(tag => tag.trim()),
      price: parseFloat(event.target.price.value),
    };
    // setGames([...games, newGame]);
    setStores(stores =>
    stores.map(store =>
      store.location === event.target.location.value
        ? { ...store, games: [...(store.games || []), newGame] }
        : store
    )
  );
    event.target.reset();
    console.log('New game added:', newGame);
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
          <input type="text" name="location" placeholder="Store Location" required />
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
