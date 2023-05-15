import { NavLink } from "react-router-dom";
import "./Nav.css";
import Search from "../Search/Search";


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
      <Search />
    </nav >
  );
}