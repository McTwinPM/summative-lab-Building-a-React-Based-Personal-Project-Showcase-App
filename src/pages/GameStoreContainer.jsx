import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { use, useState } from 'react';
import gamesMartData from '../GamesMartData';

function Games() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const response = await fetch('/api/game-stores');
      const data = await response.json();
      return data;
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => { return { gamesMartData }; }
      });
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

export default Games;
