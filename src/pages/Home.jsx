import NavBar from '../components/NavBar';
import { useState } from 'react';

function Home() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
