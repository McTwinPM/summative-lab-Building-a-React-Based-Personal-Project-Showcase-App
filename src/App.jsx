import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import GameStoreContainer from './pages/GameStoreContainer';
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameStoreContainer />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
