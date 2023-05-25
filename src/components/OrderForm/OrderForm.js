import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty!";
  }
  if (!user) {
    return "You are not logged in";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)

    addDoc(ordersCollection, {
      name: formData.get('name'),
      phone: formData.get('phone'),
      user: user.uid,
      cart: cart,
    })
      .then(doc => {
        setCart({});
        navigate('/thank-you')
      })
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name:
        <i className="fa-solid fa-user"></i>
        <input type="text"
          name="name"
          required
          placeholder="First Name" />
      </label>
      <label>
        Phohe:
        <i className="fa-solid fa-phone"></i>
        <input type="tel"
          name="phone"
          required
          placeholder="+996(707) 707 707" />
      </label>
      <button>Submit</button>
    </form>
  );
}