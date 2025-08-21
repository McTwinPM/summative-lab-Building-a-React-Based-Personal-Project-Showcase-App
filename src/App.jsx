import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import GamesContainer from './pages/GamesContainer';
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesContainer />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
