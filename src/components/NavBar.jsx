import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import Logo from "../assets/icons/logo.png";
import { User } from "lucide-react";

function NavBar() {
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          About
        </NavLink>

        <NavLink 
          to="/favorities" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Favorites
        </NavLink>
        <NavLink to='/signup' className="nav-link signup-btn">
          <User />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
