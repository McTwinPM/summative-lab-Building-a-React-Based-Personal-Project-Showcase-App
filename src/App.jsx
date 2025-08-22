import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import GameStoreContainer from './pages/GameStoreContainer';
import GameStoreList from './pages/GameStoreList';
import GameStoreCard from './pages/GameStoreCard';
import GameCard from './pages/GameCard';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import gamesMartData from './GamesMartData';

function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin stores={stores} setStores={setStores} />} />
        <Route path="/game-stores" element={<GameStoreContainer stores={stores} setStores={setStores} />}>
          <Route index element={<GameStoreList />} />
          <Route path=":storeId" element={<GameStoreCard />} />
          <Route path=":storeId/games/:gameId" element={<GameCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;