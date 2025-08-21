import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Games from './pages/Games';
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
