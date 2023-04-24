import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import "./Auth.css";
import { AppContext } from "../../App";

export default function Auth() {
  const {user} =useContext(AppContext);
  return (
    <div className="Auth">
      {!user ? <i onClick={signIn} className="fa-solid fa-right-to-bracket fa-2xl signIn"></i> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <i onClick={signOff} className="fa-solid fa-right-from-bracket fa-lg signOff"></i> : null}
    </div>
  )
}