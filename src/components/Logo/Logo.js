import "./Logo.css";
import logo from "../../assets/logo.png"


export default function Logo() {
  return (
    <div className="Logo">
      <img className="logo"
        src={logo}
        alt="logo"/>

    </div>
  )
}
