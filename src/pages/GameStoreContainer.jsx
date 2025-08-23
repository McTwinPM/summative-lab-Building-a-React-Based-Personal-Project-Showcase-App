import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import gamesMartData from '../GamesMartData';

function GameStoreContainer({ stores, setStores }) {

  return (
    <>
      <Navbar />
      <div>
        <h1 data-testid="game-stores-heading">Game Stores</h1>
        <Outlet context={{ stores, setStores }} />
      </div>
    </>
  );
}

export default GameStoreContainer;
