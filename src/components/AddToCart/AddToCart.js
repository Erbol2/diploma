import { useState, useContext, useEffect } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isIconAdded, setIsIconAdded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  useEffect(() => {
    if (cart[product.id]) {
      setButtonText("Added");
      setIsIconAdded(true);
    }
  }, [cart, product.id]);

  function onAddToCartClick() {
    if (!cart[product.id]) {
      setCart({
        ...cart,
        [product.id]: 1,
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick} className="addBtn">
        {buttonText}
        <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#084d54" }}></i>
        {isIconAdded && (
          <i className="fa-solid fa-check" style={{ margin: "0 3px -3px 0" }}></i>
        )}
      </button>
    </div>
  );
}
