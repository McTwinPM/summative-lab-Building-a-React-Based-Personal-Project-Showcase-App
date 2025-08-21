import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/games">Games</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

export default Navbar;
