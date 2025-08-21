import Navbar from '../components/Navbar';
import { useState } from 'react';

function Home() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar />
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
