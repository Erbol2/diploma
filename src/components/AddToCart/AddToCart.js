import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    // const qty = cart[product.id] ? cart[product.id] + 1 : 1;  купить товар много раз 
    setCart({
      ...cart, // положить текущее содержимое корзинки
      [product.id]: 1, // добавить текущий товар
    });
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick} className="addBtn">Add to Cart
        <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#084d54", }}></i>
      </button>
      <span>
        {cart[product.id] ? cart[product.id] : 0}
      </span>

    </div>)
}