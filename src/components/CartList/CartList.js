import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";


export default function CartList() {
  //получить список товаров и корзинку 
  const { products, cart, setCart } = useContext(AppContext);

  // function onQuantityChange(product, qty) {
  //   setCart({
  //     ...cart,
  //     [product.id]: qty
  //   })
  // }
  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  // получить только ID товаров в корзике
  const productIds = Object.keys(cart);
  // чтобы вывести пройтись по товарам
  const output = products
    // удалить всетовары которые не в корзике
    .filter((product) => productIds.includes(product.id))
    // вывести товары и их количество
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/products/" + product.slug}>{product.name}</Link>
        {/* <input
          type="number"
          value={cart[product.name]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)} /> */}
        <span className="price">{cart[product.id] * product.price} $</span>
        <span className="remove" onClick={() => onItemRemove(product)} >
          <i className="fa-solid fa-xmark fa-lg " style={{ color: "#FFBA20" }}></i>
        </span>
      </div >))
  return (
    <div className="CartList">
      {output}
    </div>)
}