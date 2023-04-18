import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
export default function CartLink() {

  const { cart } = useContext(AppContext)

  const total = Object.values(cart).reduce((acc, num) => acc + num, "")
  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <i class="fa-solid fa-cart-shopping fa-bounce fa-xl" style={{ color: "#ffffff", }}>({total})</i>
      </NavLink>
    </div >
  )
}