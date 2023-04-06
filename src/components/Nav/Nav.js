import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png"


export default function Nav() {
  return (
    <nav className="Nav">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <label><input type="search"/></label>
      </ul>
    </nav>
  );
}