import Navbar from '../components/Navbar';
import { useState } from 'react';

function Home() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar />
      <div>
        <h1>Home</h1>
        <h2>Welcome to GamesMart!</h2>
        <h3>Your one-stop shop for all things gaming!</h3>
        <p>Check out the "Game Stores" tab to shop for games.</p>
        <p>Are you an Admin? check out the "Admin" tab to add game listings</p>
      </div>
    </>
  );
}

export default Home;
