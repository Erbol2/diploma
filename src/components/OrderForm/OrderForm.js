import { addDoc } from "firebase/firestore/lite";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function OrderForm() {
  const { cart, setCart } = useContext(AppContext)

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)

    addDoc(ordersCollection, {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      cart: cart,
    })
      .then(doc => {
        setCart({});
      })
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Phohe: <input type="tel" name="phone" required />
      </label>
      <label>
        Email: <input type="email" name="email" required />
      </label>
      <button>Submit</button>
    </form>
  );
}