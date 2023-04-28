import LogoSvg from "../LogoSvg/LogoSvg";
import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <LogoSvg/>
      </NavLink>
    </div>
  )
}
