import Navbar from '../components/Navbar';
import { useState } from 'react';

function Admin() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Navbar />
      <div>
        <h1>Admin</h1>
      </div>
    </>
  );
}

export default Admin;
