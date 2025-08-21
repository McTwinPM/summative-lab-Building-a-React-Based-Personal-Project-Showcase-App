import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/games">Games</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

export default NavBar;
