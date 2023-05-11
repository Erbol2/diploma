import { NavLink } from "react-router-dom";
import "./Nav.css";


export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="navbar">
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
      <div>
        <button className="burger_menu">
          <i className="fa-solid fa-bars fa-beat fa-xl"></i>
        </button>
        <ul className="toogle_nav">
          <li className="NavItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav >
  );
}