import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import GameStoreContainer from './pages/GameStoreContainer';
import GameStoreList from './pages/GameStoreList';
import GameStoreCard from './pages/GameStoreCard';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/game-stores" element={<GameStoreContainer />}>
          <Route index element={<GameStoreList />} />
          <Route path=":storeId" element={<GameStoreCard />} />
          <Route path=":storeId/games/:gameId" element={<div>GameCard</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;