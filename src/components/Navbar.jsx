import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/game-stores">Game Stores</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

export default Navbar;
