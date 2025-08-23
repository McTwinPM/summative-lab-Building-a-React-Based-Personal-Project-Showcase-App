import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import gamesMartData from '../GamesMartData';

function Admin({ stores, setStores }) {

  function handleSubmitStores(event) {
    event.preventDefault();
    const newStore = {
      id: Date.now(),
      location: event.target.elements.location.value,
      description: event.target.elements.description.value,
      phone_number: event.target.elements.phone_number.value,
      games: [],
    };
    setStores([...stores, newStore]);
    event.target.reset();
    console.log('New store added:', newStore);
  }
  
  function handleSubmitGame(event) {
    event.preventDefault();
    const newGame = {
      id: Date.now(),
      location: event.target.elements.location.value,
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      tags: event.target.elements.tags.value.split(',').map(tag => tag.trim()),
      price: parseFloat(event.target.elements.price.value),
    };
    setStores(stores => {
      const updatedStores = stores.map(store => {
        console.log('Processing store:', store);
        if (store.location === event.target.elements.location.value) {
          console.log('Match found for location:', store.location);
          const updatedStore = { ...store, games: [...(store.games || []), newGame] };
          console.log('Updated store:', updatedStore);
          return updatedStore;
        }
        return store;
      });
      return updatedStores;
    });
    event.target.reset();
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 data-testid="Admin-heading">Admin</h1>
        <form onSubmit={handleSubmitStores}>
          <input type="text" name="location" placeholder="Store Location" required />
          <input type="text" name="description" placeholder="Store Description" required />
          <input type="text" name="phone_number" placeholder="Store Phone Number" required />
          <button type="submit">Add Store</button>
        </form>
        <form onSubmit={handleSubmitGame}>
          <input type="text" name="name" placeholder="Game Name" required />
          <input type="text" name="location" placeholder="Game Store Location" required />
          <input type="text" name="description" placeholder="Game Description" required />
          <input type="text" name="tags" placeholder="Tags (comma separated)" required />
          <input type="number" name="price" placeholder="Price" required />
          <button type="submit">Add Game</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
