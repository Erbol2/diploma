import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import "./Auth.css";
import { AppContext } from "../../App";

export default function Auth() {
  const {user} =useContext(AppContext);
  return (
    <div className="Auth">
      {!user ? <i onClick={logIn} className="fa-solid fa-right-to-bracket fa-2xl signIn"></i> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <i onClick={logOut} className="fa-solid fa-right-from-bracket fa-lg signOff"></i> : null}
    </div>
  )
}