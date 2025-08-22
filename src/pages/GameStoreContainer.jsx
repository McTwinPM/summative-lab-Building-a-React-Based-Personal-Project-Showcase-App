import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import gamesMartData from '../GamesMartData';

function GameStoreContainer() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
  try {
    const response = await fetch('/api/game-stores');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    setStores(data);
  } catch (error) {
    // fallback to local data
    setStores(gamesMartData.stores);
  }
};

    fetchStores();
  }, []);


  return (
    <>
      <Navbar />
      <div>
        <h1>Game Stores</h1>
        <Outlet context={{ stores }} />
      </div>
    </>
  );
}

export default GameStoreContainer;
